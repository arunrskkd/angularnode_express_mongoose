import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddailyreportComponent } from './adddailyreport.component';

describe('AdddailyreportComponent', () => {
  let component: AdddailyreportComponent;
  let fixture: ComponentFixture<AdddailyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddailyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
