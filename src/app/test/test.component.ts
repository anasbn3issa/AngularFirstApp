import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  prop1 : string = "Val1";
  constructor() { }

  ngOnInit(): void {
  }

  getVal(t:number){
    console.log("getVal()"+t);
  }

}
