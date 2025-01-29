import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherflouesimpleComponent } from './rechercherflouesimple.component';

describe('RechercherflouesimpleComponent', () => {
  let component: RechercherflouesimpleComponent;
  let fixture: ComponentFixture<RechercherflouesimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherflouesimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherflouesimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
