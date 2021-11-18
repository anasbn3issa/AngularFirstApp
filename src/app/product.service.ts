import { Injectable } from '@angular/core';
import { newProduct } from './models/newProduct';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Products: newProduct[];
  productsUrl:string;
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    }
  
  observableProduct: Observable<newProduct[]>;
  constructor(private myHttp : HttpClient) {
    this.productsUrl='http://localhost:3000/products';
   }

  /*
  ngOnInit(): void {
    this.productsUrl='http://localhost:3000/products';
    //this.Products= this.getAllProducts();
    //this.getAllProductsFromServer();
  }*/
  
  getAllProducts() {
    return [
      { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
    { id: 4, code: 128,libelle: "Laptop", prixunitaire : 1500, tauxTva :40},
  ];
  }

  
  getAllProductsFromServer(): Observable<newProduct[]> {
    return this.myHttp.get<newProduct[]>(this.productsUrl);
  }

  

  getNbProductsByLibelle(libelle:string) {
    return this.Products.filter(x => x.libelle === libelle).length;
  }
  deleteProduct (id: number): Observable<newProduct> {
    const url=this.productsUrl+'/'+ id;
    return this.myHttp.delete<newProduct>(url);
    }

    addProduct (product: newProduct): Observable<newProduct> {
      return this.myHttp.post<newProduct>(this.productsUrl, product, this.httpOptions);
}
}