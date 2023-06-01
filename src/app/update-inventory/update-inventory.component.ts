import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyTypes } from 'src/Models/myTypes';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService,private router:Router ){}
  inventoryId: string = '';
  inventory: any = [];
  types: MyTypes[]=[] as MyTypes[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      console.log(data);
      this.inventoryId = data.Id;
      console.log(this.inventoryId);

      //view api call
      this.api.viewInventory(this.inventoryId).subscribe((data: any) => {
        console.log(data);
        this.inventory = data;

        this.api.getallType().subscribe((data: any) => {
          console.log(data);
          this.types = data;
        });
      });
    }); 
  } 
  updateInventory(){
    this.api.updateInventory(this.inventoryId,this.inventory).subscribe((data: any) => {
    this.router.navigateByUrl('')
      
    })  
  }
}

