import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePayMethodComponent } from './sale-pay-method.component';

describe('SalePayMethodComponent', () => {
  let component: SalePayMethodComponent;
  let fixture: ComponentFixture<SalePayMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalePayMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePayMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
