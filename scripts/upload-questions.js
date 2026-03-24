import fs from "fs/promises";
import path from "path";
import process from "process";
import admin from "firebase-admin";

const dataPath = path.resolve(
  process.cwd(),
  "src/assets/citizenship_questions_260.json"
);

const {
  FIREBASE_PROJECT_ID,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_PRIVATE_KEY,
} = process.env;

if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
  console.error(
    "Missing Firebase env vars. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY."
  );
  process.exit(1);
}

const privateKey = FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n");

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: FIREBASE_PROJECT_ID,
    clientEmail: FIREBASE_CLIENT_EMAIL,
    privateKey,
  }),
});

const db = admin.firestore();

const normalizeId = (item, index) => {
  if (item.id) return String(item.id);
  if (item.question_id) return String(item.question_id);
  if (item.qid) return String(item.qid);
  return `q${String(index + 1).padStart(3, "0")}`;
};

const normalizeDoc = (item) => {
  const { id, question_id, qid, ...rest } = item;
  return rest;
};

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const run = async () => {
  const raw = await fs.readFile(dataPath, "utf-8");
  const parsed = JSON.parse(raw);
  const items = Array.isArray(parsed) ? parsed : parsed.items || [];

  if (!items.length) {
    console.error("No questions found in the JSON file.");
    process.exit(1);
  }

  const batches = chunk(items, 450);
  console.log(`Uploading ${items.length} questions in ${batches.length} batch(es)...`);

  for (let i = 0; i < batches.length; i += 1) {
    const batch = db.batch();
    batches[i].forEach((item, index) => {
      const id = normalizeId(item, i * 450 + index);
      const docRef = db.collection("questions").doc(id);
      batch.set(docRef, normalizeDoc(item), { merge: true });
    });
    await batch.commit();
    console.log(`Batch ${i + 1}/${batches.length} uploaded.`);
  }

  console.log("Upload complete.");
};

run().catch((err) => {
  console.error("Upload failed:", err);
  process.exit(1);
});
