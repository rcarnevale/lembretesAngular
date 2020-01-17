import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Lembrete } from '../lembrete/lembrete';
import { LembreteService } from '../lembrete/lembrete.service';


@Component({
  selector: 'app-lembrete-list',
  templateUrl: './lembrete-list.component.html',
  styleUrls: ['./lembrete-list.component.css']
})
export class LembreteListComponent implements OnInit, OnDestroy {

  lembretesOfLembreteListComponent: Lembrete[] = [];

  filter: string = "";
  debounce: Subject<string> = new Subject<string>();

  hasMoreOfLembreteListComponent: boolean = true;
  currentPage: number = 1;

  formOfLembreteListComponent: any;

  
  constructor(
    private activatedRoute: ActivatedRoute,
    private lembreteService: LembreteService
    ) {}
  
  ngOnInit(): void {
    this.formOfLembreteListComponent = {};
    this.lembretesOfLembreteListComponent = this.activatedRoute.snapshot.data.lembretes;
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load(){
    this.lembreteService
      .listFromUserPaginated(++this.currentPage)
      .subscribe(lembretes => {
        this.lembretesOfLembreteListComponent = this.lembretesOfLembreteListComponent.concat(lembretes);
        if(!lembretes.length) this.hasMoreOfLembreteListComponent = false;
        
      });
  }

  atualiza(lembrete:Lembrete[]) {
    this.lembreteService.listFromUserPaginated(this.currentPage)
    .subscribe(lembretes => this.lembretesOfLembreteListComponent = lembretes);
  }

  
}
