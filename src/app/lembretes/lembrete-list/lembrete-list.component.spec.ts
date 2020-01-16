import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteListComponent } from './lembrete-list.component';

describe('LembreteListComponent', () => {
  let component: LembreteListComponent;
  let fixture: ComponentFixture<LembreteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
