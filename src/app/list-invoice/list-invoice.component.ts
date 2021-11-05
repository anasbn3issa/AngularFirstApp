
import { Component, OnInit } from '@angular/core';
import { newInvoice } from '../models/newInvoice';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {
  invoices:newInvoice[];
  invoiceToEdit:newInvoice;
  showAdd = false;
  nb=5;
  constructor() { }
  show=false;
  ngOnInit(): void {
    this.invoices =[
      { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill: "14/07/2021" , Status : true},
      { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill: "02/10/2020" , Status : false},
      { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill: "15/12/2021" , Status : false},
  
      ]
  
  }
  editInvoice(x:newInvoice){
    this.show=true;
    this.invoiceToEdit=x;
    
  }
  editMyInvoice(i:any){
    for (let k in this.invoices){
      if (this.invoices[k].idInvoice == i.idInvoice){
        this.invoices[k]=i;
      }
    }


    
  }
  showForm(){
    this.showAdd=true;
  }
  addInvoice(i:newInvoice){
this.invoices.push(i);
  }
}