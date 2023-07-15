/**
 * Produces the shortened form of a given URL
 * Invariant: url is a valid URL, and does not already exist as a value in urlmap
 * Effect: updates the `urlmap` to record the url and its shortened version.
 */
export default function shortenUrl(url: string, urlmap: Record<number, string> ): string {
    const id = Object.keys(urlmap).length; // number of elements in hash table
    const short = `http://localhost:3333/s/${id}`;
    urlmap[id] = url;
    return short;
  }
  