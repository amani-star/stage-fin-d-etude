import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchersimplepatientComponent } from './recherchersimplepatient.component';

describe('RecherchersimplepatientComponent', () => {
  let component: RecherchersimplepatientComponent;
  let fixture: ComponentFixture<RecherchersimplepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchersimplepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchersimplepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
