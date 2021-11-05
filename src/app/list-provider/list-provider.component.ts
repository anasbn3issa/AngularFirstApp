import { Component, OnInit } from '@angular/core';
import { Provider } from '../models/provider';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

  public ListProviders: Provider[];
  public currentItem: Provider;
  constructor() { }

  ngOnInit(): void {
    this.ListProviders =[
      { idProvider: 1, code: "F-1978",libelle: "PC"},
      { idProvider: 2, code: "F-1978",libelle: "TV"},
      { idProvider: 3, code: "F-1978",libelle: "Table"},
      ];
      this.currentItem = this.ListProviders[0];

  }

  sendThisProvider(p:Provider) {
    this.currentItem=p;
  }


}
