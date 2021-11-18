import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponentComponent } from './add-form-component/add-form-component.component';
import { AddNewproductComponent } from './add-newproduct/add-newproduct.component';
import { AddProductReactiveFormsComponent } from './add-product-reactive-forms/add-product-reactive-forms.component';
import { AddProductTDComponentComponent } from './add-product-tdcomponent/add-product-tdcomponent.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { MainUserComponent } from './main-user/main-user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"mainuser", component:MainUserComponent, children:[
    {path:"listuser/:cat", component:ListUserComponent}
  ]},
  {path:"mainproduct", component:MainProductComponent},
  {path:"mainprovider", component:MainProviderComponent},
  {path:"maininvoice", component:MainInvoiceComponent},
  //{path:"invoice/:id/:active", component:InvoiceComponent},
  {path:"invoice", component:InvoiceComponent},
  {path:"form/:id", component:AddFormComponentComponent},
  {path:"addproduct", component:AddProductTDComponentComponent},
  {path:"addproduct2", component:AddProductReactiveFormsComponent},
  {path:"loginuser", component:LoginUserComponent},
  {path:"showfacture", component:ListInvoiceComponent},
  {path:"showProviders", component:ListProviderComponent},
  {path:"addUser", component:AddUserComponent},
  {path:"listProduct", component:ListProductsComponent},
  {path:"addnewproduct", component:AddNewproductComponent},

  
  {path:"**", component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
