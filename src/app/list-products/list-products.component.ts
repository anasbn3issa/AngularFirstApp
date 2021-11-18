import { Component, OnInit } from '@angular/core';
import { newProduct } from '../models/newProduct';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  ListProduct: newProduct[];

  nbProductsByLib : number;
  show : any;
  constructor(private ac:ActivatedRoute,private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    //this.ListProduct=this.productService.getAllProducts();
    this.productService.getAllProductsFromServer().subscribe(res=> {
      this.ListProduct=res;
      console.log(this.ListProduct);
});
    this.nbProductsByLib= 0;
    this.show = false;
  }

  getNbProductsByLibelle(libelle : string) {
    this.show=true;
    this.nbProductsByLib = this.productService.getNbProductsByLibelle(libelle);
  }

  deleteProduct(id: number){
    console.log(id);
    this.productService.deleteProduct(id).subscribe(); 
    this.router.navigateByUrl('/listProduct');
  }
}
