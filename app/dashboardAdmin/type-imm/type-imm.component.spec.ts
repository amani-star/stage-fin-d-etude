import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeImmComponent } from './type-imm.component';

describe('TypeImmComponent', () => {
  let component: TypeImmComponent;
  let fixture: ComponentFixture<TypeImmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeImmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeImmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
