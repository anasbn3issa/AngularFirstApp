import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myVal : string;

  constructor() {
    this.myVal="Bonjour la vie";
   }

  ngOnInit(): void {
  }

  
  
 concatStringParent() {
    console.log('parentcomponent concat');
  }
}
