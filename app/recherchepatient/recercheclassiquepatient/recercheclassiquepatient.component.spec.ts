import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecercheclassiquepatientComponent } from './recercheclassiquepatient.component';

describe('RecercheclassiquepatientComponent', () => {
  let component: RecercheclassiquepatientComponent;
  let fixture: ComponentFixture<RecercheclassiquepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecercheclassiquepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecercheclassiquepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
