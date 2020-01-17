import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Lembrete } from '../../lembrete/lembrete';

@Component({
  selector: 'ap-lembretes',
  templateUrl: './lembretes.component.html',
  styleUrls: ['./lembretes.component.css']
})
export class LembretesComponent implements OnChanges {

  @Input() lembretesOfLembretesComponent: Lembrete[] = [];

  rowsOfLembretesComponent =[];

  constructor() { }

  ngOnChanges(changes : SimpleChanges){
    if(changes.lembretesOfLembretesComponent){
      this.rowsOfLembretesComponent = this.groupColumns(this.lembretesOfLembretesComponent);
    }
  }

  groupColumns(lembretes: Lembrete[]){
    const newRows = [];

    console.log(lembretes);
    for(let i=0; i<lembretes.length; i+=3){
      newRows.push(lembretes.slice(i, i+3));
      console.log(newRows);
    }

    return newRows;
  }

}
