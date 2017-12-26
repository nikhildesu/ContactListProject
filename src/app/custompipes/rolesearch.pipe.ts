import { Pipe, PipeTransform } from '@angular/core';
import {Registration} from '../service/registration/registration'
@Pipe({
  name: 'rolesearch'
})
export class RolesearchPipe implements PipeTransform {

  transform(registration:Registration[], SearchValue: any):any {
    console.log('pipe values are follows as :'); 
    console.log(registration); 
    if(SearchValue){
    if (typeof SearchValue === 'string'){
    let searchedKey=SearchValue.toLowerCase();
    return registration.filter(afd => afd.userid.toLowerCase().includes(searchedKey));
      }
      else{
        console.log('number search for ' +SearchValue); 
        return registration.filter(afd => afd.userid === SearchValue);
      }
    
    }
    else{
    return registration;
    }

}
}