import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoiceId
  isActive:boolean=false

  constructor(private ac: ActivatedRoute) { }

  ngOnInit(): void {
    /* PathParam
    this.ac.paramMap.subscribe(res=>{
      this.invoiceId = res.get('id')
      this.isActive = JSON.parse(res.get('active'))
    })*/
    
    
    //queryparam
    this.ac.queryParams.subscribe(res=>{
      this.invoiceId = res['id']
      this.isActive = JSON.parse(res['active'])
      //console.log(res['id'])
    })
  }

}
