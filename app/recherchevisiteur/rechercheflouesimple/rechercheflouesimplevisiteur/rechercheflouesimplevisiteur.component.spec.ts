import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheflouesimplevisiteurComponent } from './rechercheflouesimplevisiteur.component';

describe('RechercheflouesimplevisiteurComponent', () => {
  let component: RechercheflouesimplevisiteurComponent;
  let fixture: ComponentFixture<RechercheflouesimplevisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheflouesimplevisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheflouesimplevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
