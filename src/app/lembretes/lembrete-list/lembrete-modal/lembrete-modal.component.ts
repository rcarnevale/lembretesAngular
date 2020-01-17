import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LembreteService } from '../../lembrete/lembrete.service';
import { Lembrete } from '../../lembrete/lembrete';
import { LembreteListComponent } from '../lembrete-list.component';

@Component({
  selector: 'lembrete-modal',
  templateUrl: './lembrete-modal.component.html',
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModal]
})
export class LembreteModalComponent implements OnInit {

  formModal: any;
  @Input() formParaList = [];

  constructor(
    private modalService: NgbModal, 
    private lembreteService: LembreteService,
    private lembreteList: LembreteListComponent
    ) {
  }

  ngOnInit(){
    this.formModal = {};
  }

  open(content) {
    this.modalService.open(content);
  }

  save(){
    this.lembreteService
      .sendLembrete(this.formModal)
      .subscribe((lembrete:Lembrete[]) =>
        this.lembreteList.atualiza(lembrete))
      
    this.formModal = {};
  }
}
