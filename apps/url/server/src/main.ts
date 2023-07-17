import express from 'express';
import cors from 'cors';
import { getAllUrls } from './utils/getAllUrls';
import { deleteUrl } from './utils/deleteUrl';

/**
 * * Stateful dependencies to inject at root.
 */
type MainDependencies = {
  shortenUrl: (original: string) => Promise<string>;
  lookupUrl: (shortId: number) => Promise<string>;
  getAllUrls: () => Promise<Array<any>>,
  deleteUrl: (id: number) => Promise<void>
};

export async function createApp({ shortenUrl, lookupUrl }: MainDependencies) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.post('/api/shorten', async (req, res) => {
    const original = req.body.original;
    const short = await shortenUrl(original);

    res.status(201).send({
      short: short,
      original: original,
    });
  });

  app.get('/s/:id', async (req, res) => {
    const id = Number(req.params.id);
    const original = await lookupUrl(id);
    res.redirect(original);
  });
  
  app.get('/api/getAllUrls', async (req, res) => {
    const allURLs = await getAllUrls();
    res.status(200).send({
      urls: allURLs
    })
  });

  app.delete('/deleteURL/:id', async (req, res) => {
    const id = Number(req.params.id);
    await deleteUrl(id)
    res.status(200).send({
      message: 'successfully deleted url with id ' + req.body.urlID
    })
  })

  return app;
}