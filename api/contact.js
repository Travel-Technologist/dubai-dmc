import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const {
      fullName,
      email,
      phone,
      destination,
      travelDate,
      travellers,
      message,
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `🌍 New Website Enquiry from ${fullName}`,
      html: `
      <h2>New Contact Form Submission</h2>

      <table border="1" cellpadding="10" cellspacing="0">
        <tr><td><b>Name</b></td><td>${fullName}</td></tr>
        <tr><td><b>Email</b></td><td>${email}</td></tr>
        <tr><td><b>Phone</b></td><td>${phone}</td></tr>
        <tr><td><b>Destination</b></td><td>${destination}</td></tr>
        <tr><td><b>Travel Date</b></td><td>${travelDate}</td></tr>
        <tr><td><b>Travellers</b></td><td>${travellers}</td></tr>
        <tr><td><b>Message</b></td><td>${message}</td></tr>
      </table>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Email sending failed",
      });
    }

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}