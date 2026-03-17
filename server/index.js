import express from "express";

const app = express();
app.use(express.json());

const POLAR_API_URL = "https://api.polar.sh/v1/checkouts/";

app.post("/api/checkout", async (req, res) => {
  const token = process.env.POLAR_ACCESS_TOKEN;
  const productId = process.env.POLAR_PRODUCT_ID || "e53acd75-8f64-4864-85f9-31efc2fce059";
  const appUrl = process.env.APP_URL || "http://localhost:5174";

  if (!token) {
    return res.status(500).json({ error: "Missing POLAR_ACCESS_TOKEN" });
  }

  const { customerEmail, externalCustomerId } = req.body || {};

  const payload = {
    products: [productId],
    success_url: `${appUrl}/dashboard?checkout=success`,
    cancel_url: `${appUrl}/dashboard?checkout=cancel`,
  };

  if (customerEmail) payload.customer_email = customerEmail;
  if (externalCustomerId) payload.external_customer_id = externalCustomerId;

  try {
    const response = await fetch(POLAR_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.json({ url: data.url, id: data.id });
  } catch (err) {
    console.error("Polar checkout error:", err);
    return res.status(500).json({ error: "Checkout failed" });
  }
});

const port = process.env.PORT || 8787;
app.listen(port, () => {
  console.log(`Polar checkout server running on ${port}`);
});
