const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');


app.use(express.static('public'));

const storage = multer.diskStorage({
  destination: 'public/images',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });


let products = [
  { name: "Product 1", description: "Description for Product 1", image: "images/product1.jpg" },
  { name: "Product 2", description: "Description for Product 2", image: "images/product2.jpg" }
];


app.get('/', (req, res) => {
  res.render('catalog', { products });
});

app.get('/upload', (req, res) => {
  res.render('upload');
});

app.post('/upload', upload.single('image'), (req, res) => {
  const { name, description } = req.body;
  const image = req.file ? 'images/' + req.file.filename : 'images/default.jpg';

 
  products.push({ name, description, image });

  
  res.redirect('/');
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
