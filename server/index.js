const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/projects', (req, res) => {
  res.json([
    { id: 1, name: 'First Project', url: 'https://example.com' },
    { id: 2, name: 'Second Project', url: 'https://example.com' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});