import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    getfb(){
       
      location.href="https://www.facebook.com/";
    }

    getig(){
      location.href="https://www.instagram.com/";
    }
     
    gettw(){
      location.href="https://twitter.com/?lang=en";
    }

    getgit(){
      location.href="https://github.com/";
  
    }

    
}
