import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   getCV(){
   
         location.href="file:///C:/Users/mrish/Desktop/Angular/Myportfolio/src/assets/Rishi's%20Resume.pdf";
   }

}
