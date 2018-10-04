import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGridComponent } from './customer-grid.component';

describe('CustomerGridComponent', () => {
  let component: CustomerGridComponent;
  let fixture: ComponentFixture<CustomerGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
