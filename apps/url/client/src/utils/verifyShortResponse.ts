import { Shortened } from "../schema/urlData";

// Ensures the object received from the server is in 
// a valid 'Shortened' form
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function verifyShortResponse(newUrlFromService: any): Shortened | undefined {

    let newUrl: Shortened | undefined = undefined;
    if(newUrlFromService.original.length > 0 
        && newUrlFromService.short.length > 0
        && newUrlFromService.original.length > newUrlFromService.short.length) {
  
         newUrl = {
          id: newUrlFromService.id,
          original: newUrlFromService.original,
          short: newUrlFromService.short,
        }
    }
    return newUrl;
}