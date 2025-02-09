import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const verificationToken = crypto.randomBytes(32).toString('hex');

  console.log(`Verification Token for ${email}: ${verificationToken}`);


  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Email',
    text: `Click the link below to verify your email:\n\n
    ${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Verification email sent!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Email sending failed' }, { status: 500 });
  }
}
