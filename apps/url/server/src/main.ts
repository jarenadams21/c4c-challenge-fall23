import express from 'express';
import cors from 'cors';
import shortenUrl from './utils/shortenUrl';

// Mutable Application State

/**
 * A map of Short URL IDs to full original URLs
 * http://localhost/s/123, http://example.com/...
 *
 * { 123 -> 'http://example.com/...' }
 */
const urlmap: Record<number, string> = {};

// App

const app = express();
app.use(express.json());
app.use(cors());


// Endpoints
app.post('/api/shorten', (req, res) => {
  const original = req.body.original;
  const short = shortenUrl(original, urlmap);

  res.send({
    short: short,
    original: original,
  });
});

app.get('/s/:id', (req, res) => {
  const id = Number(req.params.id);
  const original = urlmap[id];
  res.redirect(original);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);