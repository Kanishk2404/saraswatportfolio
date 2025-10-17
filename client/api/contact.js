// Vercel Serverless Function for contact form
// Deploy this under the `client` project on Vercel so `/api/contact` is available.

export default async function handler(req, res) {
  // Debug log for RESEND_API_KEY
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  console.log('Contact request (serverless):', { name, email, subject, message });

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // dynamic import to avoid bundling issues in some environments
    const { Resend } = await import('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <noreply@kanishksaraswat.me>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }

    console.log('Email sent (serverless):', data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Serverless contact error:', err);
    return res.status(500).json({ error: 'Server error', details: err.message });
  }
}
