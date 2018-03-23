import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdailyreportComponent } from './viewdailyreport.component';

describe('ViewdailyreportComponent', () => {
  let component: ViewdailyreportComponent;
  let fixture: ComponentFixture<ViewdailyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdailyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
