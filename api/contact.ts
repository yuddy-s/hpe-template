export const config = {
  runtime: 'nodejs',
};

import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';


export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.RESTAURANT_EMAIL,
        pass: process.env.RESTAURANT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Halal Pizza Express Website" <${process.env.RESTAURANT_EMAIL}>`,
      to: process.env.RESTAURANT_EMAIL,
      replyTo: email,
      subject: `New HPE Contact Form Message`,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Email failed to send' });
  }
}
