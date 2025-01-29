import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheclasspatientComponent } from './rechercheclasspatient.component';

describe('RechercheclasspatientComponent', () => {
  let component: RechercheclasspatientComponent;
  let fixture: ComponentFixture<RechercheclasspatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheclasspatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheclasspatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
