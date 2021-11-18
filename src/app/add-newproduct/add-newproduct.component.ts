import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { newProduct } from '../models/newProduct';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-add-newproduct',
  templateUrl: './add-newproduct.component.html',
  styleUrls: ['./add-newproduct.component.css']
})
export class AddNewproductComponent implements OnInit {

  myForm : FormGroup;
  detailsForm: FormGroup;
  myProducts: Array<newProduct>;
  toAdd: newProduct;

  constructor(private ps:ProductService, private router: Router) { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      code: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z-0-9]{8,}")]),
      libelle: new FormControl("",[Validators.required,Validators.minLength(3)]),
      prixunitaire: new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]*")]),
      tauxtva: new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]*")]),
    });
    this.toAdd= new newProduct();
    this.myProducts= [];
  }

  get myIdProduit() {
    return this.myForm.get('id');
  }
  get myCode() {
    return this.myForm.get('code');
  }

  get myLibelle() {
    return this.myForm.get('libelle');
  }

  get myPrixUnitaire() {
    return this.myForm.get('prixunitaire');
  }

   get myCategorie() {
    return this.myForm.get('categorie');

   }
   get myTauxTva() {
    return this.myForm.get('tauxtva');

   }


  save(){
    this.toAdd=this.myForm.value;
    this.ps.addProduct(this.toAdd).subscribe (res => {
    console.log('Product created!');
    console.log(this.toAdd);
    this.router.navigateByUrl('/home');})
    ;
    }

}
