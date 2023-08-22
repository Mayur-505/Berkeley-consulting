// import axios from "axios";


// export default async function handler(req: any, res: any) {
//   const { email, html } = req.body;
//   console.log('req', req)
//   try {
//     // Your email sending logic here
//     // Example: sending an email via external API
//     const response = await axios.post("https://example-email-api.com/send", {
//       to: email,
//       subject: "Contact Inquiry",
//       html: html,
//     });

//     console.log(response.data);

//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error sending email" });
//   }
// }

import { NextApiRequest, NextApiResponse } from "next";
const nodemailer = require("nodemailer")

export default async function handler(request: NextApiRequest, res: NextApiResponse) {
  const { email, html } =  request.body;
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    authentication: 'plain'
  });
  try {
    let data = await transporter.sendMail({
      from: 'help@berkeley.io <berkeley@gmail.com>',
      to: email,
      subject: 'Welcome to berkeley',
      html: html
    })
    res.status(200).json({ result: "Message sent" })
  } catch (err) {
    res.status(400).json({ result: err })
  }
}
