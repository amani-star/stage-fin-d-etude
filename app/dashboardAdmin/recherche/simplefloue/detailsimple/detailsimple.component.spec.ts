import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsimpleComponent } from './detailsimple.component';

describe('DetailsimpleComponent', () => {
  let component: DetailsimpleComponent;
  let fixture: ComponentFixture<DetailsimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
