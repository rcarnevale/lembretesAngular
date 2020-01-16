import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembretesComponent } from './lembretes.componentent';

describe('LembretesComponent', () => {
  let component: LembretesComponent;
  let fixture: ComponentFixture<LembretesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembretesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
