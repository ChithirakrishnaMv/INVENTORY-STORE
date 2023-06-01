import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyInventory } from 'src/Models/myInventoey';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit { 

  allInventory:MyInventory[] = []
  searchKey:string='';
  constructor(private api:ApiService ){}
  ngOnInit(): void {
    this.getAllInventory()
  }
  getAllInventory(){
    this.api.getAllInventory().subscribe((res:any)=>{
      console.log(res);
      this.allInventory=res;
      
    })
  }
  Search(event:any){
    console.log(event.target.value);
    this.searchKey = event.target.value; 
  }
  deteteInventory(sId:any){
    this.api.deteteInventory(sId).subscribe((result:any) =>{
      alert('Inventory Successfully Deleted')
      this.getAllInventory()
            // location.reload()  // reload
    })
  }
}
