export async function onRequestPost({ request, env }) {
  const token = env.POLAR_KEY;
  const productId = env.POLAR_PRODUCT_ID || "e53acd75-8f64-4864-85f9-31efc2fce059";
  const appUrl = env.APP_URL || "https://yourinterview.pages.dev";

  if (!token) {
    return new Response(JSON.stringify({ error: "Missing POLAR_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    body = {};
  }

  const payload = {
    products: [productId],
    success_url: `${appUrl}/dashboard?checkout=success`,
    cancel_url: `${appUrl}/dashboard?checkout=cancel`,
  };

  if (body.customerEmail) payload.customer_email = body.customerEmail;
  if (body.externalCustomerId) payload.external_customer_id = body.externalCustomerId;

  const response = await fetch("https://api.polar.sh/v1/checkouts/", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    return new Response(JSON.stringify({ error: data }), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ url: data.url, id: data.id }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
