import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-lembrete',
    templateUrl: 'lembrete.component.html'
})
export class LembreteComponent {

    @Input() titulo ='';
    @Input() prioridade ='';
    @Input() texto = '';
}