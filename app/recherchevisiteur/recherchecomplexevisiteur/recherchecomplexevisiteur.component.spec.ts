import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchecomplexevisiteurComponent } from './recherchecomplexevisiteur.component';

describe('RecherchecomplexevisiteurComponent', () => {
  let component: RecherchecomplexevisiteurComponent;
  let fixture: ComponentFixture<RecherchecomplexevisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchecomplexevisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchecomplexevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
