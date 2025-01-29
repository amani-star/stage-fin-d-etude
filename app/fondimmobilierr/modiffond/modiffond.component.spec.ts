import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiffondComponent } from './modiffond.component';

describe('ModiffondComponent', () => {
  let component: ModiffondComponent;
  let fixture: ComponentFixture<ModiffondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiffondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
