import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherclassComponent } from './rechercherclass.component';

describe('RechercherclassComponent', () => {
  let component: RechercherclassComponent;
  let fixture: ComponentFixture<RechercherclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
