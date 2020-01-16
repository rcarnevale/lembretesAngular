import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteFormComponent } from './lembrete-form.component';

describe('LembreteFormComponent', () => {
  let component: LembreteFormComponent;
  let fixture: ComponentFixture<LembreteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
