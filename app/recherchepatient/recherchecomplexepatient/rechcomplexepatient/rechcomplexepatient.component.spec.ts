import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechcomplexepatientComponent } from './rechcomplexepatient.component';

describe('RechcomplexepatientComponent', () => {
  let component: RechcomplexepatientComponent;
  let fixture: ComponentFixture<RechcomplexepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechcomplexepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechcomplexepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
