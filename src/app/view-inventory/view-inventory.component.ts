import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.css'],
})
export class ViewInventoryComponent implements OnInit {
  inventoryId: string = '';
  inventory: any = [];
  typeId: string = '';
  typeName: string = '';

  constructor(
    private activatedrouter: ActivatedRoute,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.activatedrouter.params.subscribe((data: any) => {
      console.log(data);
      this.inventoryId = data.sId;
      console.log(this.inventoryId);

      this.api.viewInventory(this.inventoryId).subscribe((data) => {
        console.log(data);
        this.inventory = data;
        this.typeId = (data as any).groupId;

        this.api.getTypeName(this.typeId).subscribe((data: any) => {
          console.log(data);
          this.typeName = data.name;
          console.log(this.typeName);
        });
      });
    });
  }
}
