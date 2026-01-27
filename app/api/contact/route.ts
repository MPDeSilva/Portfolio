import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, company, message }: ContactFormData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your.email@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password',
      },
      // Alt for other email services
      // host: process.env.EMAIL_HOST,
      // port: process.env.EMAIL_PORT,
      // secure: true,
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS,
      // },
    });

    const mailOptions = {
      from: `${firstName} ${lastName} <${email}>`,
      to: process.env.EMAIL_TO || 'your.email@example.com',
      subject: `Portfolio Contact Form: Message from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not specified'}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company || 'Not specified'}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Optional: Send auto-reply to the sender
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM || 'noreply@yourportfolio.com',
      to: email,
      subject: 'Thank you for reaching out!',
      text: `Hi ${firstName},\n\nThank you for your message. I've received your inquiry and will get back to you as soon as possible.\n\nBest regards,\nMilinda`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for reaching out!</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for your message. I've received your inquiry and will get back to you as soon as possible.</p>
          <p>Best regards,<br>Milinda</p>
        </div>
      `,
    };

    await transporter.sendMail(autoReplyOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
