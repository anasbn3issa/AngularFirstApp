import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  myForm : FormGroup;
  mesCnx:any= [];

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl({value:'',disabled:true},[Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      password: new FormControl("",[Validators.pattern("[a-zA-Z]*")])
    })
  }


  get myEmail() {
    return this.myForm.controls.email;
  }
  get myPassword() {
    return this.myForm.controls.password;
  }
  add() {
    console.log(this.myForm.getRawValue)
    this.mesCnx.push();
    this.myForm.reset();
  }
}
