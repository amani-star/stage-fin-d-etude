import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereutilisateurComponent } from './gereutilisateur.component';

describe('GereutilisateurComponent', () => {
  let component: GereutilisateurComponent;
  let fixture: ComponentFixture<GereutilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereutilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GereutilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
