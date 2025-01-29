import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutenewfondimmobilierComponent } from './ajoutenewfondimmobilier.component';

describe('AjoutenewfondimmobilierComponent', () => {
  let component: AjoutenewfondimmobilierComponent;
  let fixture: ComponentFixture<AjoutenewfondimmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutenewfondimmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutenewfondimmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
