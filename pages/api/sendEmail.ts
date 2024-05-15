import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
require('dotenv').config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    console.log(req.body);
    
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'jakub.baran2@gmail.com',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ message: 'Failed to send email', error: error.message });
      } else {
        // Jeśli error nie jest instancją Error, obsłuż go w odpowiedni sposób
        res.status(500).json({ message: 'Failed to send email', error: 'Unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}