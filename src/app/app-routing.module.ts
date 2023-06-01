import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',redirectTo:'inventory/admin',pathMatch:'full'},
  { path: 'inventory/admin',component:InventoryManagementComponent },
  { path: 'inventory/add',component:AddInventoryComponent },
  { path: 'inventory/update/:Id',component:UpdateInventoryComponent },
  { path: 'inventory/view/:sId',component:ViewInventoryComponent },
  { path: '**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
