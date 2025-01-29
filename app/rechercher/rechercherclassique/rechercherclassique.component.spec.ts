import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherclassiqueComponent } from './rechercherclassique.component';

describe('RechercherclassiqueComponent', () => {
  let component: RechercherclassiqueComponent;
  let fixture: ComponentFixture<RechercherclassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherclassiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherclassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
