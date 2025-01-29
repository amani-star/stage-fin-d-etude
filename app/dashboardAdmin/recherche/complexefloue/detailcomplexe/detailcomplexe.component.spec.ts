import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcomplexeComponent } from './detailcomplexe.component';

describe('DetailcomplexeComponent', () => {
  let component: DetailcomplexeComponent;
  let fixture: ComponentFixture<DetailcomplexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcomplexeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcomplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
