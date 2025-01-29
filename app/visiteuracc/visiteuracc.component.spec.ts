import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiteuraccComponent } from './visiteuracc.component';

describe('VisiteuraccComponent', () => {
  let component: VisiteuraccComponent;
  let fixture: ComponentFixture<VisiteuraccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisiteuraccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisiteuraccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
