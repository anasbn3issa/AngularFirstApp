import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { TestComponent } from './test/test.component';
import { ListUserComponent } from './list-user/list-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AddFormComponentComponent } from './add-form-component/add-form-component.component';
import { AddProductTDComponentComponent } from './add-product-tdcomponent/add-product-tdcomponent.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddProductReactiveFormsComponent } from './add-product-reactive-forms/add-product-reactive-forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AddInvoiceComponentComponent } from './add-invoice-component/add-invoice-component.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { ListInvoiceComponent } from './list-invoice/list-invoice.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { ShowOneProviderComponent } from './show-one-provider/show-one-provider.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TestComponent,
    ListUserComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundPageComponent,
    HomeComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent,
    AddFormComponentComponent,
    AddProductTDComponentComponent,
    LoginUserComponent,
    AddProductReactiveFormsComponent,
    ParentComponent,
    ChildComponent,
    AddInvoiceComponentComponent,
    EditInvoiceComponent,
    ListInvoiceComponent,
    ListProviderComponent,
    ShowOneProviderComponent,
    AddInvoiceComponent,
    AddUserComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
