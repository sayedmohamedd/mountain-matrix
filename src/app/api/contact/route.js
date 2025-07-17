// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);
// console.log(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!email || !name || !message) {
//       return NextResponse.json(
//         { error: 'All fields are required.' },
//         { status: 400 }
//       );
//     }

//     await resend.emails.send({
//       from: 'Contact Form <support@mountainssolutions.com>', // must be verified in Resend
//       to: 'sayedmohamed123.sm74@gmail.com',
//       subject: `New message from ${name}`,
//       reply_to: email,
//       text: message,
//     });

//     await resend.emails.send({
//       from: 'support@mountainssolutions.com', // ✅ مهم جدًا
//       to: 'your-email@gmail.com',
//       subject: `New Contact Form Message from ${name}`,
//       reply_to: email,
//       html: `
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Message:</strong><br/>${message}</p>
//   `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Email send error:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }
