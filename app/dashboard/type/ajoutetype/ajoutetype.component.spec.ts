import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutetypeComponent } from './ajoutetype.component';

describe('AjoutetypeComponent', () => {
  let component: AjoutetypeComponent;
  let fixture: ComponentFixture<AjoutetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutetypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
