import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'perfil-a',
  templateUrl: './perfil-a.component.html',
  styleUrls: ['./perfil-a.component.css']
})
export class PerfilAComponent implements OnInit {

  open: boolean = true;

  opened: string;
  closed: string;

  constructor() { }

  ngOnInit() {
    if (window.screen.width < 768) {
      this.opened = 'open-mobile';
      this.closed = 'content-mobile';
    } else {
      this.opened = 'open';
      this.closed = 'content';
    }

  }

  changeOpt() {
    this.open = !this.open;
  }
}
