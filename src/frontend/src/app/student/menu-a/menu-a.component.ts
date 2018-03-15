import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menua-component',
  templateUrl: './menu-a.component.html',
  styleUrls: ['./menu-a.component.css']
})
export class MenuAComponent implements OnInit {

  cssType: string;
  constructor() { }

  ngOnInit() {
    if(window.screen.width < 768){
      this.cssType = 'sidebar-mobile fixed-sidebar';
    }else{
      this.cssType = 'sidebar fixed-sidebar';
    }

  }

}
