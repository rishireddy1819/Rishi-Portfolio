import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.css']
})
export class MyskillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

     getreadmore(){
      
       document.write("Passionate front-end web developer with experience using Angular JS to build all aspects of the user experience and user interface for client-facing landing pages. Specializes in creating responsive single page applications.");
        
     }
}
