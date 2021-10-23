import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductReactiveFormsComponent } from './add-product-reactive-forms.component';

describe('AddProductReactiveFormsComponent', () => {
  let component: AddProductReactiveFormsComponent;
  let fixture: ComponentFixture<AddProductReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
