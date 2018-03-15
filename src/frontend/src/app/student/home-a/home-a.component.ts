import { Component, OnInit } from '@angular/core';

import {Materia} from "./models/materia.model";
import {Aluno} from "./models/aluno.model";
import {UserDataService} from "./services/user-data.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-home-a',
  templateUrl: './home-a.component.html',
  styleUrls: ['./home-a.component.css']
})
export class HomeAComponent implements OnInit {

  open: boolean = true;
  opened: string;
  closed: string;
  aluno: Aluno = new Aluno("","","","",false,"","","","");

  materias: Materia[];

  constructor(private userData: UserDataService, private route: ActivatedRoute) {
    console.log(route.snapshot.params['id'])
    userData.getAluno().subscribe(
      user => {
        this.aluno = user;
      }
    );


    userData.getDisciplinas().subscribe(
        disciplinas => {
          this.materias = disciplinas;
        }
    );
  }

  ngOnInit() {
    if(window.screen.width < 768){
      this.opened = 'open-mobile';
      this.closed = 'content-mobile';
    }else{
      this.opened = 'open';
      this.closed = 'content';
    }

  }

  changeOpt(){
    this.open = !this.open;
  }
}
