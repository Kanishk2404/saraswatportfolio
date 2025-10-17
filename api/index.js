import express from 'express';
import compression from 'compression';
import fs from 'fs';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();
console.log('CWD:', process.cwd());
console.log('.env exists:', fs.existsSync('./.env'));

const app = express();
app.use(compression());

// Configure CORS
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://kanishksaraswat.me',
  'https://www.kanishksaraswat.me'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin) {
    // no origin (curl, server-to-server)
    return next();
  }
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    // For preflight, short-circuit the request
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    return next();
  } else {
    console.warn('Blocked CORS origin:', origin);
    return res.status(403).json({ error: 'CORS blocked' });
  }
});
app.use(express.json());
// Set cache headers for static assets
app.use((req, res, next) => {
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|xml)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
  }
  next();
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    message: 'Backend is running!'
  });
});

// Self-check endpoint for production verification (no secrets)
app.get('/api/self-check', (req, res) => {
  res.json({
    status: 'ok',
    serverTime: new Date().toISOString(),
    allowedOrigins
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  console.log('Contact form request received:', { name, email, subject, message });
  // Debug log for RESEND_API_KEY
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
  if (!name || !email || !subject || !message) {
    console.log('Missing required fields:', { name, email, subject, message });
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // Debug log for RESEND_API_KEY
    console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <noreply@kanishksaraswat.me>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form!: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
    console.log('Email sent:', data);
    res.json({ ok: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
});

export default app;
