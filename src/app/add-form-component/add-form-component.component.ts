import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-form-component',
  templateUrl: './add-form-component.component.html',
  styleUrls: ['./add-form-component.component.css']
})
export class AddFormComponentComponent implements OnInit {
  id : any;
  constructor(private route: ActivatedRoute) { 
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      //L'attribut prenom contient "Jean"
  });
  }

  ngOnInit(): void {
    console.log(this.id);
  }

}
