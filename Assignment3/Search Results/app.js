const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


const items = [
  { name: 'Book 1', type: 'book' },
  { name: 'Movie 1', type: 'movie' },
  { name: 'Book 2', type: 'book' },
  { name: 'Product 1', type: 'product' }
];


app.get('/searchform', (req, res) => {
  res.render('searchform');
});


app.get('/search', (req, res) => {
  const query = req.query.q;
  const results = items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));

  res.render('results', {
    query: query,
    results: results
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
