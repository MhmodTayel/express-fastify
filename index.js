import express from 'express';

const app = express();

app.get('/', function (req, res) {
  res.send({ hello: 'world express' });
});

app.listen(3000, () => {
  console.log(' server is running on port 3000');
});
