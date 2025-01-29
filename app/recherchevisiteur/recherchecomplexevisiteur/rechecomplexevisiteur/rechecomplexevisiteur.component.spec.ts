import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechecomplexevisiteurComponent } from './rechecomplexevisiteur.component';

describe('RechecomplexevisiteurComponent', () => {
  let component: RechecomplexevisiteurComponent;
  let fixture: ComponentFixture<RechecomplexevisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechecomplexevisiteurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechecomplexevisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
