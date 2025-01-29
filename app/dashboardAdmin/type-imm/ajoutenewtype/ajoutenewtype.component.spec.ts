import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutenewtypeComponent } from './ajoutenewtype.component';

describe('AjoutenewtypeComponent', () => {
  let component: AjoutenewtypeComponent;
  let fixture: ComponentFixture<AjoutenewtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutenewtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutenewtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
