import { Pipe, PipeTransform } from '@angular/core';
import {Contact} from '../service/manageContacts/contact'

@Pipe({
  name: 'contactFilter'
})
export class ContactFilterPipe implements PipeTransform {
  transform(contact:Contact[], SearchValue: any):any {
    console.log('pipe values are follows as :'); 
    console.log(contact); 
    if(SearchValue){
    if (typeof SearchValue === 'string'){
    let searchedKey=SearchValue.toLowerCase();
    return contact.filter(afd => afd.contactName.toLowerCase().includes(searchedKey));
      }
      else{
        console.log('number search for ' +SearchValue); 
        return contact.filter(afd => afd.contactNumber === SearchValue);
      }
    
    }
    else{
    return contact;
    }
}

//   transform(value: Contact[], SearchNbr: number): any {
//     console.log('pipe values '); 
//     console.log(value); 
//     return value.filter((data) => data.contactNumber > SearchNbr);
  
// }

// applyFilter(contact: Contact, cNameFilter: Contact): boolean {
//   for (let field in cNameFilter) {
//     if (cNameFilter[field]) {
//       if (typeof cNameFilter[field] === 'string') {
//         if (Contact[field].toLowerCase().indexOf(cNameFilter[field].toLowerCase()) === -1) {
//           return false;
//         }
//       } else if (typeof cNameFilter[field] === 'number') {
//         if (cNameFilter[field] !== cNameFilter[field]) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
}
