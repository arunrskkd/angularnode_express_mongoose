import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdailyreportComponent } from './editdailyreport.component';

describe('EditdailyreportComponent', () => {
  let component: EditdailyreportComponent;
  let fixture: ComponentFixture<EditdailyreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdailyreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdailyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
