import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiertypeComponent } from './modifiertype.component';

describe('ModifiertypeComponent', () => {
  let component: ModifiertypeComponent;
  let fixture: ComponentFixture<ModifiertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiertypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
