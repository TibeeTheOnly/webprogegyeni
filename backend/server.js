const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/monitorok', (req, res) => {
  res.json([
    { id: 1, brand: 'Dell', size: '24 inch' },
    { id: 2, brand: 'HP', size: '27 inch' },
    { id: 3, brand: 'Samsung', size: '32 inch' }
  ]);
});

app.get('/laptops', (req, res) => {
  res.json([
    { id: 1, brand: 'Apple', model: 'MacBook Pro' },
    { id: 2, brand: 'Dell', model: 'XPS 13' },
    { id: 3, brand: 'HP', model: 'Spectre x360' }
  ]);
});

app.get('/phones', (req, res) => {
  res.json([
    { id: 1, brand: 'Apple', model: 'iPhone 12' },
    { id: 2, brand: 'Samsung', model: 'Galaxy S21' },
    { id: 3, brand: 'Google', model: 'Pixel 5' }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
