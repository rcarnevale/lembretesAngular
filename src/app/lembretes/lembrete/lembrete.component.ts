import { Component, Input, OnInit } from "@angular/core";

import { LembreteService } from "./lembrete.service";
import { Lembrete } from "./lembrete";
import { LembreteListComponent } from "../lembrete-list/lembrete-list.component";

@Component({
    selector: 'ap-lembrete',
    templateUrl: 'lembrete.component.html'
})
export class LembreteComponent implements OnInit {

    @Input() id :number;
    @Input() titulo ='';
    @Input() prioridade ='';
    @Input() texto = '';

    constructor(
        private lembreteService : LembreteService, 
        private lembreteList : LembreteListComponent
        ){}
    
    ngOnInit(){

    }

    delete(){

        console.log(this.id)
        this.lembreteService
            .deleteLembrete(this.id)
            .subscribe((lembrete:Lembrete[]) =>
            this.lembreteList.atualiza(lembrete)
          );


    }

}