import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfondComponent } from './detailfond.component';

describe('DetailfondComponent', () => {
  let component: DetailfondComponent;
  let fixture: ComponentFixture<DetailfondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailfondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
