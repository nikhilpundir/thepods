import dotenv from 'dotenv';
dotenv.config();
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host:'smtp-gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  export default transporter;