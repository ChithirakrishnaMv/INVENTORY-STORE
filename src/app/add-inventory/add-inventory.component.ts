import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyInventory } from 'src/Models/myInventoey';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  allType:any = []; 

  inventory:MyInventory = {}

  constructor(private api:ApiService, private router:Router){}
  ngOnInit(): void {
    this.api.getallType().subscribe((data:any) => {
      console.log(data);
      this.allType=data;
      this.inventory.typeId="Select A Group"; 
    })
  }
  addInventory(){
    this.api.addInventory(this.inventory).subscribe((data:any) => {
      this.router.navigateByUrl('')
    })
  }
}
