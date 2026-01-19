import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL, // Your email address
      subject: `New message from ${name} via Contact Form`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: 'Message sent successfully!' }), { status: 200 });

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again later.' }), { status: 500 });
  }
}
