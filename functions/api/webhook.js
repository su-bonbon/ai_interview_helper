import { Webhook } from "standardwebhooks";

const textEncoder = new TextEncoder();

function base64UrlEncode(input) {
  return btoa(input)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function pemToArrayBuffer(pem) {
  const clean = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s+/g, "");
  const binary = atob(clean);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

async function getAccessToken(env) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: env.FIREBASE_CLIENT_EMAIL,
    sub: env.FIREBASE_CLIENT_EMAIL,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/datastore",
  };

  const headerB64 = base64UrlEncode(JSON.stringify(header));
  const payloadB64 = base64UrlEncode(JSON.stringify(payload));
  const data = `${headerB64}.${payloadB64}`;

  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(env.FIREBASE_PRIVATE_KEY),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    textEncoder.encode(data)
  );
  const sigB64 = base64UrlEncode(String.fromCharCode(...new Uint8Array(signature)));
  const jwt = `${data}.${sigB64}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    throw new Error(`Token error: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

async function updateUserSubscription(env, uid, isSubscribed) {
  const token = await getAccessToken(env);
  const url = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/users/${uid}?updateMask.fieldPaths=isSubscribed`;

  const body = {
    fields: {
      isSubscribed: { booleanValue: isSubscribed },
    },
  };

  const res = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const data = await res.text();
    throw new Error(`Firestore update failed: ${data}`);
  }
}

async function logWebhookEvent(env, payload) {
  const token = await getAccessToken(env);
  const url = `https://firestore.googleapis.com/v1/projects/${env.FIREBASE_PROJECT_ID}/databases/(default)/documents/webhook_logs`;
  const data = payload?.data || {};
  const externalId =
    data?.customer?.external_customer_id ||
    data?.external_customer_id ||
    data?.customer_external_id ||
    "";
  const body = {
    fields: {
      type: { stringValue: payload?.type || "" },
      created_at: { stringValue: new Date().toISOString() },
      external_customer_id: { stringValue: externalId },
      raw_id: { stringValue: data?.id || "" },
    },
  };

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function onRequestPost({ request, env }) {
  const secret = env.POLAR_WEBHOOK_SECRET;
  if (!secret) {
    return new Response("Missing POLAR_WEBHOOK_SECRET", { status: 500 });
  }

  const raw = await request.text();
  const headers = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  let payload;
  try {
    const wh = new Webhook(btoa(secret.trim()));
    payload = wh.verify(raw, headers);
  } catch (err) {
    console.error("Invalid webhook signature", err);
    return new Response("Invalid signature", { status: 403 });
  }

  const type = payload?.type;
  const data = payload?.data || {};

  const externalId =
    data?.customer?.external_customer_id ||
    data?.external_customer_id ||
    data?.customer_external_id ||
    data?.customer?.id;

  if (!externalId) {
    return new Response("Missing external customer id", { status: 200 });
  }

  try {
    await logWebhookEvent(env, payload);

    if (type === "order.paid" || type === "subscription.active") {
      await updateUserSubscription(env, externalId, true);
    }

    if (
      type === "subscription.canceled" ||
      type === "subscription.revoked" ||
      type === "order.refunded"
    ) {
      await updateUserSubscription(env, externalId, false);
    }
  } catch (err) {
    console.error("Webhook handling error", err);
    return new Response("Webhook handling failed", { status: 500 });
  }

  return new Response("ok", { status: 200 });
}
