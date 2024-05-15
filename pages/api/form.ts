import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Możesz tutaj dodać logikę do wysyłania emaila, zapisywania danych do bazy danych itp.
    console.log({ name, email, subject, message });

    res.status(200).json({ message: "Form submitted successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
