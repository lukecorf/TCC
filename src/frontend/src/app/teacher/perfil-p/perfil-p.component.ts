import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from "rxjs/Rx";

@Component({
  selector: 'perfil-p-component',
  templateUrl: './perfil-p.component.html',
  styleUrls: ['./perfil-p.component.css']
})
export class PerfilPComponent implements OnInit {
  private timer;
  private sub: Subscription;
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

    this.timer = Observable.timer(500);
    this.sub = this.timer.subscribe(t => this.changeOpt());
  }

  changeOpt() {
    this.open = !this.open;
  }
}
