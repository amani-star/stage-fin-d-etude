import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheclassiquevisiteurComponent } from './rechercheclassiquevisiteur.component';

describe('RechercheclassiquevisiteurComponent', () => {
  let component: RechercheclassiquevisiteurComponent;
  let fixture: ComponentFixture<RechercheclassiquevisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheclassiquevisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheclassiquevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
