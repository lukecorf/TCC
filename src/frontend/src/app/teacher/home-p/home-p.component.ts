import { Component, OnInit } from '@angular/core';
import {Aluno} from "../../student/home-a/models/aluno.model";
import {Materia} from "../../student/home-a/models/materia.model";
import {UserDataService} from "../../student/home-a/services/user-data.service";
import {ActivatedRoute} from "@angular/router";
import {UserData} from "../../services/userdata.service";
import { Observable, Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-home-p',
  templateUrl: './home-p.component.html',
  styleUrls: ['./home-p.component.css']
})
export class HomePComponent implements OnInit {
  private timer;
  private sub: Subscription;
  open: boolean = true;
  opened: string;
  closed: string;
  aluno: Aluno = new Aluno("","","","",false,"","","","");

  materias: Materia[];

  constructor(private userData: UserDataService, private route: ActivatedRoute) {
    console.log(route.snapshot.params['id']);

    userData.getDisciplinas().subscribe(
      disciplinas => {
        this.materias = disciplinas;
      }
    );

    this.aluno = UserData.getAluno()

  }

  ngOnInit() {
    if(window.screen.width < 768){
      this.opened = 'open-mobile';
      this.closed = 'content-mobile';
    }else{
      this.opened = 'open';
      this.closed = 'content';
    }

    this.timer = Observable.timer(500);
    this.sub = this.timer.subscribe(t => this.changeOpt());

  }

  changeOpt(){
    this.open = !this.open;
  }
}
