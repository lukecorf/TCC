import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

import { LoginService } from '../sevices/login.service';
import { Login } from './models/login.model';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Aluno} from "../../student/home-a/models/aluno.model";
import {UserData} from "../../services/userdata.service";

@Component({
  selector: 'data-login-component',
  templateUrl: './data-login.component.html',
  styleUrls: ['./data-login.component.css']
})
export class DataLoginComponent implements OnInit {
  cssClass: string;
  login: Boolean = false;

  constructor(private loginService: LoginService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if(window.screen.width < 992 && window.screen.width >= 768){
      this.cssClass='col-md-12 data-login-tablet';
    }else if(window.screen.width < 768){
      this.cssClass='col-md-12 data-login-mobile';
    }else{
      this.cssClass='col-md-12 data-login';
    }
  }

  onResize(event) {
    if(event.target.innerWidth < 992 && event.target.innerWidth >= 768){
      this.cssClass='col-md-12 data-login-tablet';
    }else if(event.target.innerWidth < 768){
      this.cssClass='col-md-12 data-login-mobile';
    }else{
      this.cssClass='col-md-12 data-login';
    }
  }

  verifyLogin(change: Aluno){

    if(change.nome !== 'ERROR-LOGIN'){
      this.authService.login();
      UserData.setAluno(change);
      this.router.navigate(['home-aluno/'+change.matricula]);
    }else{
      console.log('ERROR');
    }


  }

  onSingin(form: NgForm){

    if( (form.value.code !== '') && (form.value.password !== '')){
      this.loginService.loginQuery(new Login(form.value.code, form.value.password)).
      subscribe(
        result => this.verifyLogin(result)
       );
    }
  }

}
