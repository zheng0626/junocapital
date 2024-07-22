const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/2018', (req, res) => {
  res.sendFile(__dirname + '/public/yikching2018.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
