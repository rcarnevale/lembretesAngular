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


    editForm: any;

    @Input() id :number;
    @Input() titulo ='';
    @Input() prioridade ='';
    @Input() texto = '';

    constructor(
        private modalService: NgbModal, 
        private lembreteService: LembreteService,
        private lembreteList: LembreteListComponent
        ) {
    }

    ngOnInit(){
        this.editForm = {};
    }

    open(content) {
        this.modalService.open(content);
        
    }

    edit(){
        this.editForm = {
            id:this.id,
            titulo:this.titulo,
            prioridade: this.prioridade,
            texto: this.texto
        }
        
        this.lembreteService
        .editLembrete(this.editForm)
        .subscribe((lembrete:Lembrete[]) =>
        this.lembreteList.atualiza(lembrete))
        this.editForm = {};
}
}