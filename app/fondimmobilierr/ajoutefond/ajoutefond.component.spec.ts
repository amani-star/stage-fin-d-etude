import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutefondComponent } from './ajoutefond.component';

describe('AjoutefondComponent', () => {
  let component: AjoutefondComponent;
  let fixture: ComponentFixture<AjoutefondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutefondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutefondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
