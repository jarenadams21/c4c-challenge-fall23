// Verifies the provided urlString is a valid url per the checkValidity function built into javascript
/* https://www.w3schools.com/js/js_validation_api.asp */
export default function isValidUrl(urlString: string) : boolean {
        const inputElement = document.createElement('input');
        inputElement.type = 'url';
        inputElement.value = urlString;
  
        if (!inputElement.checkValidity()) {
          return false;
        } else {
          return true;
        }
      }
