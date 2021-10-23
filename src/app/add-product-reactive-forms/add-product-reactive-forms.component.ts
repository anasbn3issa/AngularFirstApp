import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { product } from '../models/product';

@Component({
  selector: 'app-add-product-reactive-forms',
  templateUrl: './add-product-reactive-forms.component.html',
  styleUrls: ['./add-product-reactive-forms.component.css']
})
export class AddProductReactiveFormsComponent implements OnInit {

  myForm : FormGroup;
  detailsForm: FormGroup;
  myProducts: Array<product>;
  toAdd: product;
  constructor() { }

  ngOnInit(): void {
    this.myForm= new FormGroup({
      idproduit: new FormControl("",[Validators.required]),
      code: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z-0-9]{8,}")]),
      libelle: new FormControl("",[Validators.required,Validators.minLength(3)]),
      prixunitaire: new FormControl("",[Validators.required,Validators.pattern("[1-9][0-9]*")]),
      detailsForm: new FormGroup({
        iddetailproduit: new FormControl("",Validators.required),
        datecreation: new FormControl("",Validators.required),
        datedernieremodification: new FormControl("",Validators.required),
        categorie: new FormControl("",Validators.required)

      })
    });
    this.toAdd= new product();
    this.myProducts= [];
  }

  get myIdProduit() {
    return this.myForm.get('idproduit');
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

  get myIdDetailProduit() {
    return this.myForm.get('detailsForm.iddetailproduit');
  }

  get myDateCreation() {
    return this.myForm.get('detailsForm.datecreation');
  }
  get myDateDerniereModification () {
    return this.myForm.get('detailsForm.datedernieremodification');
  }
   get myCategorie() {
    return this.myForm.get('detailsForm.categorie');

   }

  addProduct() {
    console.log('Add product pushed');
    this.toAdd.code= this.myCode.value;
    this.toAdd.categorie= this.myCategorie.value;
    this.toAdd.dateCreation= this.myDateCreation.value;
    this.toAdd.idProduit= this.myIdProduit.value;
    this.toAdd.libelle= this.myLibelle.value;
    this.toAdd.prixUnitaire= this.myPrixUnitaire.value;
    this.toAdd.idDetailProduit= this.myIdDetailProduit.value;
    this.toAdd.dateDerniereModification= this.myDateDerniereModification.value;
   // console.log(JSON.stringify(this.toAdd));
    this.myProducts.push(this.toAdd);
    console.log(JSON.stringify(this.myProducts));

    this.myForm.reset();
  }

}
