import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

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
  constructor(private ac:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    
   // this.list=this.userService.getAllUsers();
   this.userService.getAllUsersFromDB().subscribe(res=> {
          this.list=res
          this.listIn=this.list;
          this.ac.paramMap.subscribe(
          res=>{
            console.log(res.get('cat')),
            this.list=this.listIn.filter((user) =>{
              return user.accountCategory === res.get('cat');//return user.accountCategory === res.get('category')  ;
          })
          }
        )
   });
   
  
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
