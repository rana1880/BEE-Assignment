const express = require('express');
const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Sample products list
const products = [
  { name: "Product A", price: 100 },
  { name: "Product B", price: 150 },
  { name: "Product C", price: 200 }
];

// Route for /products
app.get('/products', (req, res) => {
  const query = req.query.search;
  let filteredProducts = products;

  if (query) {
    filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  res.render('products', { products: filteredProducts });
});

// Static folder for public assets
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
