import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewproductComponent } from './add-newproduct/add-newproduct.component';
import { ListProductsComponent } from './list-products/list-products.component';

const routes: Routes = [
  { path: 'listProduct', component: ListProductsComponent },
  {path: 'addnewproduct' , component:AddNewproductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
