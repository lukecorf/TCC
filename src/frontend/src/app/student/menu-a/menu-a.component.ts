import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserData} from "../../services/userdata.service";

@Component({
  selector: 'menua-component',
  templateUrl: './menu-a.component.html',
  styleUrls: ['./menu-a.component.css']
})
export class MenuAComponent implements OnInit {

  name: string;
  code: string;

  cssType: string;
  constructor(private router: Router) {
    this.name = UserData.getAluno().nome;
    this.code = UserData.getAluno().matricula;
  }

  ngOnInit() {
    if(window.screen.width < 768){
      this.cssType = 'sidebar-mobile fixed-sidebar';
    }else{
      this.cssType = 'sidebar fixed-sidebar';
    }

  }

  goHistorico(){
    this.router.navigate(['historico-a/'+this.code]);
  }

  goHome(){
    this.router.navigate(['home-aluno/'+this.code]);
  }

  goPerfil(){
    this.router.navigate(['perfil-a/'+this.code]);
  }
}
