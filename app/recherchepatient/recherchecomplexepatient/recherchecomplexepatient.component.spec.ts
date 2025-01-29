import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchecomplexepatientComponent } from './recherchecomplexepatient.component';

describe('RecherchecomplexepatientComponent', () => {
  let component: RecherchecomplexepatientComponent;
  let fixture: ComponentFixture<RecherchecomplexepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchecomplexepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchecomplexepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
