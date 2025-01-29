import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplefloueComponent } from './simplefloue.component';

describe('SimplefloueComponent', () => {
  let component: SimplefloueComponent;
  let fixture: ComponentFixture<SimplefloueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplefloueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplefloueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
