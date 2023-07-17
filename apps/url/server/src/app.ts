import { createApp } from './main';
import { lookupUrl } from './utils/lookupUrl';
import { shortenUrl } from './utils/shortenUrl';
import { getAllUrls } from './utils/getAllUrls'
import { deleteUrl } from './utils/deleteUrl';

// Composition Root
async function main() {
  const app = await createApp({
    shortenUrl,
    lookupUrl,
    getAllUrls,
    deleteUrl,
  });

  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
  });
  server.on('error', console.error);
}

main();