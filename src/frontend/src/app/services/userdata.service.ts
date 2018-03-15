import { Injectable } from '@angular/core';
import {Aluno} from "../student/home-a/models/aluno.model";

@Injectable()
export class UserData {
    static user: Aluno = new Aluno("err","err","","",false,"","","","");

    public  static setAluno(aluno: Aluno){
      this.user = aluno;
    }

    public static getAluno(){
      return this.user;
    }
}
