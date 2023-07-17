import { Shortened } from "../schema/urlData";

// Ensures the object received from the server is in 
// a valid 'Shortened' form
export default function verifyShortResponse(newUrlFromService: any, id: number): Shortened | undefined {

    let newUrl: Shortened | undefined = undefined;
    if(newUrlFromService.original.length > 0 
        && newUrlFromService.short.length > 0
        && newUrlFromService.original.length > newUrlFromService.short.length) {
  
         newUrl = {
          id: id,
          original: newUrlFromService.original,
          short: newUrlFromService.short,
        }
    }
    return newUrl;
}