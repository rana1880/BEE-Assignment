const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const isLoggedIn = false; 

app.get('/', (req, res) => {
  res.render('index', { isLoggedIn });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
