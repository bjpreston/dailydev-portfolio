const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'First Project',
      url: 'https://example.com',
      description: 'A simple project to test fullstack routing.'
    },
    {
      id: 2,
      name: 'Second Project',
      url: 'https://example.com',
      description: 'A second project with a different twist.'
    },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});