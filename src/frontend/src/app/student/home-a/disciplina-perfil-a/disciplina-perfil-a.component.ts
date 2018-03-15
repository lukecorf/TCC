import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'disciplina-perfil-a',
  templateUrl: './disciplina-perfil-a.component.html',
  styleUrls: ['./disciplina-perfil-a.component.css']
})
export class DisciplinaPerfilAComponent implements OnInit {

  @Input() nome: string;
  @Input() status: string;
  @Input() professor:string;
  @Input() proxProva: string;
  @Input() img: string;
  @Input() falta: number;
  @Input() nota: number;


  constructor() { }

  ngOnInit() {
  }

}
