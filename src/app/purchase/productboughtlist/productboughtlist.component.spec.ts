import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductboughtlistComponent } from './productboughtlist.component';

describe('ProductboughtlistComponent', () => {
  let component: ProductboughtlistComponent;
  let fixture: ComponentFixture<ProductboughtlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductboughtlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductboughtlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
