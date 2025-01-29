import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercherflouesimplepatientComponent } from './rechercherflouesimplepatient.component';

describe('RechercherflouesimplepatientComponent', () => {
  let component: RechercherflouesimplepatientComponent;
  let fixture: ComponentFixture<RechercherflouesimplepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercherflouesimplepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercherflouesimplepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
