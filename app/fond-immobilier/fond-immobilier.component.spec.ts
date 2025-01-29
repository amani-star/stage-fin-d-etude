import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondImmobilierComponent } from './fond-immobilier.component';

describe('FondImmobilierComponent', () => {
  let component: FondImmobilierComponent;
  let fixture: ComponentFixture<FondImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
