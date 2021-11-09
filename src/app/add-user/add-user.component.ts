import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  myForm: FormGroup;
  myUsers: Array<User>;
  toAdd: User;
  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      idUser: new FormControl("",[Validators.required]),
      firstName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3),Validators.minLength(3)]),
      lastName: new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z]*"),Validators.minLength(3),Validators.minLength(3)]),
      birthDate: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern("^[a-zA-Z0-9]{8,}?")]),
      accountCategory: new FormControl("",[Validators.required]),

  });
  this.toAdd= new User();
  this.myUsers= [];
  

}
  get myIdCustomer() { return this.myForm.get('idUser'); }
  get myFirstName() { return this.myForm.get('firstName'); }
  get myLastName() { return this.myForm.get('lastName'); }
  get myBirthDate() { return this.myForm.get('birthDate'); }
  get myPassword() { return this.myForm.get('password'); }
  get myEmail() { return this.myForm.get('email'); }
  get myAccountCategory() { return this.myForm.get('accountCategory'); } 

 

  addUser() {
    console.log('Add User pushed');
    this.toAdd.idCustomer= this.myIdCustomer.value;
    this.toAdd.accountCategory= "Customer";
    this.toAdd.birthDate= this.myBirthDate.value;
    this.toAdd.email= this.myEmail.value;
    this.toAdd.firstName= this.myFirstName.value;
    this.toAdd.lastName= this.myLastName.value;
    this.toAdd.password= this.myPassword.value;

    this.myUsers.push(this.toAdd);
    console.log(JSON.stringify(this.myUsers));

    this.myForm.reset();
  }


}
