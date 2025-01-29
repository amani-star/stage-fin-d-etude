import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyermailComponent } from './envoyermail.component';

describe('EnvoyermailComponent', () => {
  let component: EnvoyermailComponent;
  let fixture: ComponentFixture<EnvoyermailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyermailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyermailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
