import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheclassvisiteurComponent } from './rechercheclassvisiteur.component';

describe('RechercheclassvisiteurComponent', () => {
  let component: RechercheclassvisiteurComponent;
  let fixture: ComponentFixture<RechercheclassvisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheclassvisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheclassvisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
