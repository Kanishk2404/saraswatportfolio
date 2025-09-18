import express from 'express'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'

import { Resend } from 'resend'

dotenv.config()

const app = express()
app.use(compression())
const PORT = process.env.PORT || 5000

const allowedOrigins = [
  'https://kanishksaraswat.me',
  'kanishksaraswat.me',
  'http://localhost:5173'];
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}))
app.use(express.json())
// Set cache headers for static assets
app.use((req, res, next) => {
  if (req.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|webp|xml)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=604800, immutable')
  }
  next()
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {}
  console.log('Contact form request received:', { name, email, subject, message })
  // Debug log for RESEND_API_KEY
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
  if (!name || !email || !subject || !message) {
    console.log('Missing required fields:', { name, email, subject, message })
    return res.status(400).json({ error: 'Missing required fields' })
  }
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: `Portfolio Contact <noreply@kanishksaraswat.me>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      reply_to: email
    })
    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email', details: error.message })
    }
    console.log('Email sent:', data)
    res.json({ ok: true })
  } catch (error) {
    console.error('Error sending email:', error)
    res.status(500).json({ error: 'Failed to send email', details: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`)
})



