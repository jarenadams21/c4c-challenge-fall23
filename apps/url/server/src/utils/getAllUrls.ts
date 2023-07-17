import { getDB } from "./getDB";

export async function getAllUrls() {
    const db = await getDB();
    const urls = []

    await db.each('SELECT * FROM url', function(err, row) {
        urls.push(row);
    });
    return urls;
  }