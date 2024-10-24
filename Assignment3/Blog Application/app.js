const express = require('express');
const app = express();
const port = 8080;
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const posts = [
  { title: 'First Post', content: 'This is the content of the first post.' },
  { title: 'Second Post', content: 'This is the content of the second post.' }
];


app.get('/posts', (req, res) => {
  res.render('index', { posts: posts });
});


app.get('/newpost', (req, res) => {
  res.render('newpost');
});


app.post('/newpost', (req, res) => {
  const newPost = { title: req.body.title, content: req.body.content };
  posts.push(newPost);
  res.redirect('/posts');
});


app.get('/post/:title', (req, res) => {
  const post = posts.find(p => p.title === req.params.title);
  if (post) {
    res.render('post', { post: post });
  } else {
    res.send('Post not found');
  }
});

app.listen(port, () => {
  console.log(`Blog app running at http://localhost:${port}`);
});
