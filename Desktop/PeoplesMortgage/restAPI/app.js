const express = require('express');
const app = express();


//Middlewares
app.use('/posts', () => {
  console.log('This is the middleware')
})

//ROUTES
app.get('/', (req, res) => {
  res.send('we are on home');
});

app.get('/posts', (req, res) => {
  res.send('we are on posts');
});

app.listen(3000);