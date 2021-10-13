import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  prop1= "test";
  prop2= "test2";
  prop3="test3";
  searchVal="";
  list : User[];
  listIn: User[];
  constructor(private ac:ActivatedRoute) { }

  ngOnInit(): void {
    
      this.list=[
        {
          idCustomer: 1,
          firstName: "Mila",
          lastName: " Kunis",
          birthDate: "1999-06-30",
          accountCategory: "Admin",
          email: "mila@kunis.com",
          password: "test",
          picture: "https://bootdey.com/img/Content/avatar/avatar3.png",
          profession: "Software Engineer"
        },
        {
          idCustomer: 2,
          firstName: "George",
          lastName: "Clooney",
          birthDate: "1999-06-30",
          accountCategory: "Customer",
          email: "marlon@brando.com",
          password: "test",
          picture: "https://bootdey.com/img/Content/avatar/avatar2.png",
          profession: "Software Engineer"
        },
        {
          idCustomer: 3,
          firstName: "George",
          lastName:  "Clooney",
          birthDate: "1999-06-30",
          accountCategory: "Customer",
          email: "marlon@brando.com",
          password: "test",
          picture: "https://bootdey.com/img/Content/avatar/avatar1.png",
          profession: "Software Engineer"
        },
        {
          idCustomer: 4,
          firstName: "Ryan",
          lastName:  "Gossling",
          birthDate:"1999-06-30",
          accountCategory: "Golden",
          email: "Ryan@nicholson.com",
          password: "test",
          picture: "https://bootdey.com/img/Content/avatar/avatar4.png",
          profession: "Software Engineer"
        },
        {
          idCustomer: 5,
          firstName: "Robert",
          lastName:  "Downey",
          birthDate: "1999-06-30",
          accountCategory: "Blocked Account",
          email: "robert@nicholson.com",
          password: "test",
          picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
          profession: "Software Engineer"
        }
  
  ]
this.listIn=this.list;
  this.ac.paramMap.subscribe(
    res=>{
      console.log(res.get('cat')),
      this.list=this.listIn.filter((user) =>{
        return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
     })
  }
)
  
  }
  getUserCategory(c:string){
     if (c == 'Admin'){
       return true;
     }else{
       return false;
     }
  }

  deleteUser(x:number){
    this.list.splice(x,1);
  }
  changeValue(x:string){
    this.prop2=x;
  }

}
