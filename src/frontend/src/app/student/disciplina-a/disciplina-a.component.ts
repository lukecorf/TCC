import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ModalModel} from "./models/modal.model";

@Component({
  selector: 'disciplina-a',
  templateUrl: './disciplina-a.component.html',
  styleUrls: ['./disciplina-a.component.css']
})
export class DisciplinaAComponent implements OnInit {

  open: boolean = true;
  opened: string;
  closed: string;
  selectedJob: string = "";
  modalInfo: ModalModel = new ModalModel("",0,"");

  public pieChartLabels:string[] = ['Faltas', 'Restante'];
  public pieChartData:number[] = [300, 500];
  public pieChartType:string = 'pie';
  public pieChartOptions: any = {responsive: true, maintainAspectRatio: false}

  constructor(private modalService: NgbModal) { }

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

  openc(content) {
    this.modalService.open(content).result.then((result) => {
      if(result){
        console.log('Everything OK');
      }else{
        console.log('Problems here man');
      }
    }, (reason) => {
      console.log('Dismissed');
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
