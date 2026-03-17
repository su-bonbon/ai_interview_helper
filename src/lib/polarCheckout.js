export async function createPolarCheckout({ customerEmail, externalCustomerId }) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ customerEmail, externalCustomerId }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error ? JSON.stringify(data.error) : "Checkout failed");
  }

  return data;
}
