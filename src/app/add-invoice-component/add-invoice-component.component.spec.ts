import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceComponentComponent } from './add-invoice-component.component';

describe('AddInvoiceComponentComponent', () => {
  let component: AddInvoiceComponentComponent;
  let fixture: ComponentFixture<AddInvoiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInvoiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
