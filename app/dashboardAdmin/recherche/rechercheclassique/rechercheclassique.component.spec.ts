import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheclassiqueComponent } from './rechercheclassique.component';

describe('RechercheclassiqueComponent', () => {
  let component: RechercheclassiqueComponent;
  let fixture: ComponentFixture<RechercheclassiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheclassiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheclassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
