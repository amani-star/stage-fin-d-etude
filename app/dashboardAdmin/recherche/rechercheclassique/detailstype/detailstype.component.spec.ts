import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstypeComponent } from './detailstype.component';

describe('DetailstypeComponent', () => {
  let component: DetailstypeComponent;
  let fixture: ComponentFixture<DetailstypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailstypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
