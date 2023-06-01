import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allInventory:any=[],searchKey:string,propName:string): any[] {
    const result:any[]=[];
    if(!allInventory||searchKey==''||propName==''){
      return allInventory
    }
    allInventory.forEach((inventory:any) => {
      if(inventory[propName].trim().toLowerCase().includes(searchKey.toLowerCase().trim())){
        result.push(inventory)
      }
    });
    return result;
  }
}
