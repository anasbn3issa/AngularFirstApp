import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() value : string;
  @Output() notifiy = new EventEmitter();
  myVal : string;




  constructor() { 
    console.log("child component constructor");
  }

  concatString(value : string) {
    this.notifiy.emit(value);
    console.log(value);
  }
  
  ngOnInit(): void {
  }

}
