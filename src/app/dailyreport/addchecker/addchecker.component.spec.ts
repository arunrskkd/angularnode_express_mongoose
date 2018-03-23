import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcheckerComponent } from './addchecker.component';

describe('AddcheckerComponent', () => {
  let component: AddcheckerComponent;
  let fixture: ComponentFixture<AddcheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
