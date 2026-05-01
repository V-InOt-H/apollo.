const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sendEmail = require('./api/send-email');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname));

// API route
app.post('/api/send-email', async (req, res) => {
  await sendEmail(req, res);
});

// Serve HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'apollo new design.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
