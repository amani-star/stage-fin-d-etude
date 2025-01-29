import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchercomplexeComponent } from './recherchercomplexe.component';

describe('RecherchercomplexeComponent', () => {
  let component: RecherchercomplexeComponent;
  let fixture: ComponentFixture<RecherchercomplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchercomplexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchercomplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
