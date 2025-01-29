import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondimmobilierrComponent } from './fondimmobilierr.component';

describe('FondimmobilierrComponent', () => {
  let component: FondimmobilierrComponent;
  let fixture: ComponentFixture<FondimmobilierrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FondimmobilierrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FondimmobilierrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
