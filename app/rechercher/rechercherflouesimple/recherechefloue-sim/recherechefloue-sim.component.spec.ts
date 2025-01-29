import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherechefloueSimComponent } from './recherechefloue-sim.component';

describe('RecherechefloueSimComponent', () => {
  let component: RecherechefloueSimComponent;
  let fixture: ComponentFixture<RecherechefloueSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherechefloueSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherechefloueSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
