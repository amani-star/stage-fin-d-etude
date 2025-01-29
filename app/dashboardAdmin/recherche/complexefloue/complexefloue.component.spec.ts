import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexefloueComponent } from './complexefloue.component';

describe('ComplexefloueComponent', () => {
  let component: ComplexefloueComponent;
  let fixture: ComponentFixture<ComplexefloueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexefloueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexefloueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
