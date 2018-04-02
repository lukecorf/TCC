import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import { MatIconModule} from "@angular/material";
import { ChartsModule } from 'ng2-charts';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InfoLoginComponent } from './login/info-login/info-login.component';
import { DataLoginComponent } from './login/data-login/data-login.component';
import { HomeAComponent } from './student/home-a/home-a.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MenuAComponent } from './student/menu-a/menu-a.component';
import { DisciplinaPerfilAComponent } from './student/home-a/disciplina-perfil-a/disciplina-perfil-a.component';

import { LoginInfoService } from './login/info-login/services/loginInfo.service';
import { LoginService } from './login/sevices/login.service';
import { AuthService } from './auth.service';
import { UserDataService } from './student/home-a/services/user-data.service';
import {AuthGuard} from './auth-guard.service';
import {HttpClientModule} from "@angular/common/http";
import { DisciplinaAComponent } from './student/disciplina-a/disciplina-a.component';
import { HistoricoAComponent } from './student/historico-a/historico-a.component';
import { PerfilAComponent } from './student/perfil-a/perfil-a.component';
import { HomePComponent } from './teacher/home-p/home-p.component';
import { MenuPComponent } from './teacher/menu-p/menu-p.component';
import { DisciplinaPerfilPComponent } from './teacher/home-p/disciplina-perfil-p/disciplina-perfil-p.component';
import { DisciplinaPComponent } from './teacher/disciplina-p/disciplina-p.component';
import { PerfilPComponent } from './teacher/perfil-p/perfil-p.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InfoLoginComponent,
    DataLoginComponent,
    HomeAComponent,
    NotFoundComponent,
    MenuAComponent,
    DisciplinaPerfilAComponent,
    DisciplinaAComponent,
    HistoricoAComponent,
    PerfilAComponent,
    HomePComponent,
    MenuPComponent,
    DisciplinaPerfilPComponent,
    DisciplinaPComponent,
    PerfilPComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    ChartsModule,
    NgbModule.forRoot()
  ],
  providers: [LoginService, UserDataService, LoginInfoService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
