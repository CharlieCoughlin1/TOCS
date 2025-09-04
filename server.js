const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const app = express();
app.use(express.json());
app.use(express.static('docs'));

app.post('/api/event', async (req, res) => {
  const row = req.body;
  if (!row || typeof row !== 'object') {
    return res.status(400).json({ error: 'Invalid payload' });
  }
  try {
    const { error } = await supabase.from('lsh_calculator_events').insert(row);
    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Database insert failed' });
    }
    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Network/insert error:', e);
    return res.status(500).json({ error: 'Database insert failed' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
