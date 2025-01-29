import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechcomplexeComponent } from './rechcomplexe.component';

describe('RechcomplexeComponent', () => {
  let component: RechcomplexeComponent;
  let fixture: ComponentFixture<RechcomplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechcomplexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechcomplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
