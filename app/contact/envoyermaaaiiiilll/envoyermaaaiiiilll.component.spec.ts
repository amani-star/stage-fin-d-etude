import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyermaaaiiiilllComponent } from './envoyermaaaiiiilll.component';

describe('EnvoyermaaaiiiilllComponent', () => {
  let component: EnvoyermaaaiiiilllComponent;
  let fixture: ComponentFixture<EnvoyermaaaiiiilllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyermaaaiiiilllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyermaaaiiiilllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
