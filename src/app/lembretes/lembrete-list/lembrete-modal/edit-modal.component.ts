import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LembreteService } from '../../lembrete/lembrete.service';
import { Lembrete } from '../../lembrete/lembrete';
import { LembreteListComponent } from '../lembrete-list.component';

@Component({
    selector: 'edit-modal',
    templateUrl: './edit-modal.component.html',
    // add NgbModalConfig and NgbModal to the component providers
    providers: [NgbModal]
  })
  export class EditModalComponent implements OnInit {
  
    editModal: any;
    @Input() formParaList = [];
  
    constructor(
      private modalService: NgbModal, 
      private lembreteService: LembreteService,
      private lembreteList: LembreteListComponent
      ) {
    }
  
    ngOnInit(){
      this.editModal = {};
    }
  
    open(contentedit) {
      this.modalService.open(contentedit);
    }
  
    edit(){
      this.lembreteService
        .editLembrete(this.editModal)
        .subscribe((lembrete:Lembrete[]) =>
        this.lembreteList.atualiza(lembrete))
      this.editModal = {};
    }
  }