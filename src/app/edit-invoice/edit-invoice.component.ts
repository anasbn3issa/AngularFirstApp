import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { newInvoice } from '../models/newInvoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
   show=false;
  @Input() invoiceToEdit:newInvoice;
  @Input() prop2:number;
  @Output() edited = new EventEmitter<newInvoice>();
  constructor() { }
  myForm:FormGroup;
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    if (changes.invoiceToEdit.firstChange){
    this.myForm=new FormGroup({
      id:new FormControl({"value":this.invoiceToEdit.idInvoice,"disabled":true}),
      discount: new FormControl(this.invoiceToEdit.discountAmount),
      bill: new FormControl(this.invoiceToEdit.billAmount),
      date: new FormControl(this.invoiceToEdit.dateBill),
      status: new FormControl(this.invoiceToEdit.Status),
    }) 
  }else{
    this.myForm.setControl('id',new FormControl(this.invoiceToEdit.idInvoice));
    this.myForm.setControl('discount',new FormControl(this.invoiceToEdit.discountAmount));
    this.myForm.setControl('bill',new FormControl(this.invoiceToEdit.billAmount));
    this.myForm.setControl('date',new FormControl(this.invoiceToEdit.dateBill));
    this.myForm.setControl('status',new FormControl(this.invoiceToEdit.Status));
  }
  }
  edit(){
   // console.log(this.myForm.value);
   console.log(this.myForm.getRawValue());
   let myi=new newInvoice();
   myi.idInvoice=this.myForm.get('id').value;
   myi.discountAmount=this.myForm.get('discount').value;
   myi.dateBill=this.myForm.get('date').value;
   myi.billAmount=this.myForm.get('bill').value;
   myi.Status=this.myForm.get('status').value;
   this.edited.emit(myi);
  }
}