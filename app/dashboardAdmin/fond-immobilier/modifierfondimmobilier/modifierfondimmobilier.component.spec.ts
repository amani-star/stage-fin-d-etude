import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierfondimmobilierComponent } from './modifierfondimmobilier.component';

describe('ModifierfondimmobilierComponent', () => {
  let component: ModifierfondimmobilierComponent;
  let fixture: ComponentFixture<ModifierfondimmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierfondimmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierfondimmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
