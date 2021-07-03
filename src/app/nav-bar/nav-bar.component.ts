import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCV(){
         
   window.location.href=("file:///C:/Users/mrish/Downloads/Rishi's%20Resume.pdf");
  }

  
    
     

}
