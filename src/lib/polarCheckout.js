export async function createPolarCheckout({ customerEmail, externalCustomerId }) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerEmail, externalCustomerId }),
  });

  const contentType = response.headers.get("content-type") || "";
  const rawText = await response.text();
  let data = null;

  if (rawText) {
    if (contentType.includes("application/json")) {
      data = JSON.parse(rawText);
    } else {
      try {
        data = JSON.parse(rawText);
      } catch {
        data = { error: rawText };
      }
    }
  }

  if (!response.ok) {
    const message =
      data?.error
        ? typeof data.error === "string"
          ? data.error
          : JSON.stringify(data.error)
        : `Checkout failed (${response.status})`;
    throw new Error(message);
  }

  if (!data) {
    throw new Error("Checkout failed (empty response).");
  }

  return data;
}
