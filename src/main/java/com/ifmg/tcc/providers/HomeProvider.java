package com.ifmg.tcc.providers;

import com.google.gson.Gson;
import com.ifmg.tcc.TADs.Aluno;
import com.ifmg.tcc.TADs.Disciplina;
import com.ifmg.tcc.TADs.LoginObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "home")
public class HomeProvider {

    Gson gson = new Gson();

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> verifyLogin(@RequestBody String login){
        System.out.println(login);
        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
    }
/*
    @GetMapping(value="/getAluno",  produces= MediaType.APPLICATION_JSON_VALUE)
    public String getAluno() {
        System.out.println("Entrei aqui");
        Aluno aluno = new Aluno("0001","Lucas Alves de Faria","2018/1","10/12/1995",true,"luke@email.com","(37) 999597899","127.831.956-58","MG-19.319.265");

       return gson.toJson(aluno);
    }

    @GetMapping(value = "/getDisciplinas")
    public String getDisciplinas(){
        ArrayList<Disciplina> disciplinas = new ArrayList<Disciplina>();

        disciplinas.add(new Disciplina("001","Web Avançado","Matriculado","Bruno Ferreira","23/12","http://s3.envato.com/files/217699422/cover.__large_preview.jpg",(float)26.0,(float)12.4));
        disciplinas.add(new Disciplina("002","Redes","Matriculado","Everthon Valadão","11/11","http://helpdigitalti.com.br/wp-content/uploads/2017/02/rede1.jpg",(float)3.0,(float)30.6));
        disciplinas.add(new Disciplina("003","Banco de Dados","Matriculado","Patricia Proença","10/12","https://d2tycqyw09ngo1.cloudfront.net/be-content/uploads/2017/03/10114900/curso-online-de-banco-de-dados-relacional-e-linguagem-sql-BECODE-new-1.png",(float)11,(float)22.8));
        disciplinas.add(new Disciplina("004","Mobile","Matriculado","Diego Mello","13/10","http://blog.newrelic.com/wp-content/uploads/shutterstock_241331182.jpg",(float)26,(float)12.4));

        return gson.toJson(disciplinas);
    }
*/
}