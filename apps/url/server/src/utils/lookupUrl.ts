import { getDB } from "./getDB";

export async function lookupUrl(shortenedId: number) {
    const db = await getDB();
  
    const result = await db.get(
      'SELECT original FROM url WHERE id = (?)',
      shortenedId
    );
    return result.original;
  }