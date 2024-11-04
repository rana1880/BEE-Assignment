const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));


app.get('/contact', (req, res) => {
  res.render('contact');
});


app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  
  res.render('thankyou', { name, email, message });
});


app.listen(3003, () => {
  console.log('Server is running on http://localhost:3003');
});