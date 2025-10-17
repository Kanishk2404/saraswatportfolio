// Vercel Serverless self-check endpoint
// Deploy under the `client` project so /api/self-check responds on the same origin.

export default function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Basic health + safe info (no secrets)
  const payload = {
    status: 'ok',
    serverTime: new Date().toISOString(),
    // Note: don't include secrets or env var values here
    message: 'Vercel serverless function is running'
  };

  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).json(payload);
}
