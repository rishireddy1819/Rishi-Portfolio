import { Component, OnInit } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-getintouch',
  templateUrl: './getintouch.component.html',
  styleUrls: ['./getintouch.component.css']
})
export class GetintouchComponent implements OnInit {

  userModel = new User('','','');
  constructor() { }

  ngOnInit(): void {
  }
     
  
}
