import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  if (
    !process.env.MAILCHIMP_API_KEY ||
    !process.env.MAILCHIMP_AUDIENCE_ID ||
    !process.env.MAILCHIMP_SERVER
  ) {
    return res.status(500).json({ error: "Missing environment variables" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const SERVER = process.env.MAILCHIMP_SERVER;

  try {
    const response = await fetch(
      `https://${SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      },
    );

    const data = await response.json();

    // Already subscribed — treat as success
    if (data.title === "Member Exists") {
      return res.status(200).json({ success: true });
    }

    if (!response.ok) {
      return res
        .status(400)
        .json({ error: data.detail || "Something went wrong" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
