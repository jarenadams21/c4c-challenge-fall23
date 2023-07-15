import { Shortened } from "../schema/urlData";

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
    console.log(newUrl)
    return newUrl;
}