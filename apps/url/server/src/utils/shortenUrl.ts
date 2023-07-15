import { getDB } from "./getDB";

/**
 * Produces the shortened form of a given URL
 * Invariant: url is a valid URL, and does not already exist as a value in urlmap
 * Effect: updates the `urlmap` to record the url and its shortened version.
 */
export async function shortenUrl(url: string): Promise<string> {
    const db = await getDB();
    
    const result = await db.run('INSERT INTO url (original) VALUES (?)', url);
    console.log(result);
    const id = result.lastID;
    const short = `http://localhost:3333/s/${id}`;

    return short;
  }
  