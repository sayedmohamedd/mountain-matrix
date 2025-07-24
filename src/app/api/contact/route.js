import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // ✅ مهم جدًا
      to: email,
      subject: `New Contact Form Message from ${name}`,
      reply_to: email,
      html: `
  <div style="max-width:600px;margin:auto;padding:20px;font-family:sans-serif;border:1px solid #eaeaea;border-radius:10px;background-color:#ffffff;">
    <div style="text-align:center;margin-bottom:30px;">
      <img src='https://mountains-matrix.vercel.app/dark-logo.png' alt="Mountain Matrix" style="height:60px;" />
    </div>

    <div style="font-size:16px;line-height:1.6;color:#333;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="margin-left:20px;">${message}</p>
    </div>

    <div style="margin-top:40px;text-align:center;font-size:13px;color:#999;">
      <p>© ${new Date().getFullYear()} Mountain Solutions. All rights reserved.</p>
    </div>
  </div>
`,
      //       html: `
      //     <p><strong>Name:</strong> ${name}</p>
      //     <p><strong>Email:</strong> ${email}</p>
      //     <p><strong>Message:</strong><br/>${message}</p>
      //   `,
    });

    //     await resend.emails.send({
    //   from: 'Support <support@mountainssolutions.com>', // ✅ حقيقي
    //   to: 'sayed.tiger96@gmail.com',
    //   subject: `New Contact Form Message from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Message:</strong><br/>${message}</p>
    //   `,
    // });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
