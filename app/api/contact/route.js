import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Docfyle Advisory <info@docfyleadvisory.com>",
      to: ["info@docfyleadvisory.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    // Send auto-reply to the user
    await resend.emails.send({
      from: "Docfyle Advisory <info@docfyleadvisory.com>",
      to: [email],
      subject: "We have received your message!",
      html: `
        <div style="font-family: sans-serif; max-w-xl; color: #333;">
          <h2 style="color: #0f172a;">Thank you for reaching out, ${name}!</h2>
          <p>We have successfully received your message and our team will get back to you shortly.</p>
          <p>Here is a copy of your message:</p>
          <blockquote style="border-left: 4px solid #cbd5e1; padding-left: 16px; color: #64748b;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <p>Best regards,<br><strong>Docfyle Advisory Team</strong></p>
        </div>
      `,
    });

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("Server Error:", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
