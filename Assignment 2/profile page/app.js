const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


const users = {
  john: { age: 25, hobby: 'Photography' },
  jane: { age: 30, hobby: 'Reading' },
  doe: { age: 20, hobby: 'Gaming' },
};

app.get('/profile/:username', (req, res) => {
  const username = req.params.username;
  const user = users[username];

  if (user) {
    res.render('profile', { username, age: user.age, hobby: user.hobby });
  } else {
    res.render('profile', { username: 'unknown', age: 'N/A', hobby: 'unknown' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
