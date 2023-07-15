import express from 'express';
import cors from 'cors';
import { shortenUrl } from './utils/shortenUrl';
import { lookupUrl } from './utils/lookupUrl';

// Mutable Application State

// App

const app = express();
app.use(express.json());
app.use(cors());


// Endpoints
app.post('/api/shorten', async (req, res) => {
  const original = req.body.original;
  const short = await shortenUrl(original);

  res.send({
    short: short,
    original: original,
  });
});

app.get('/s/:id', async (req, res) => {
  const id = Number(req.params.id);
  const original = await lookupUrl(id);
  console.log(original);
  res.redirect(original);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);