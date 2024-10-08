const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// app.get('/ychs201318', (req, res) => {
//   res.sendFile(__dirname + '/public/experiment.html');
// });

app.get('/ychs201318', (req, res) => {
  res.sendFile(__dirname + '/public/books.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
