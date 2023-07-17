import { getDB } from "./getDB";

export async function deleteUrl(id: number) {
    const db = await getDB();
  
    await db.run(
      'DELETE FROM url WHERE id = (?)',
      id
    );
  }