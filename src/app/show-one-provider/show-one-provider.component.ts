import { Component, OnInit , Input} from '@angular/core';
import { Provider } from '../models/provider';
@Component({
  selector: 'app-show-one-provider',
  templateUrl: './show-one-provider.component.html',
  styleUrls: ['./show-one-provider.component.css']
})
export class ShowOneProviderComponent implements OnInit {

  @Input() item : Provider;
  constructor() { }

  ngOnInit(): void {
  }
  

}
