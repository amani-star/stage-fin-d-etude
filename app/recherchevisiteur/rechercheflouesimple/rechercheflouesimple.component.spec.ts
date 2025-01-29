import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheflouesimpleComponent } from './rechercheflouesimple.component';

describe('RechercheflouesimpleComponent', () => {
  let component: RechercheflouesimpleComponent;
  let fixture: ComponentFixture<RechercheflouesimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheflouesimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheflouesimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
