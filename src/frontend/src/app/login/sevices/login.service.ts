import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Login } from'../data-login/models/login.model';
import 'rxjs/add/operator/catch';
import {Aluno} from "../../student/home-a/models/aluno.model";

@Injectable()
export class LoginService{

  private url = 'http://localhost:8080/login';

  constructor(private http: HttpClient){}

  loginQuery(login: Login):Observable<Aluno>{
      return this.http.post<Aluno>(this.url,JSON.stringify(login));
  }
}
