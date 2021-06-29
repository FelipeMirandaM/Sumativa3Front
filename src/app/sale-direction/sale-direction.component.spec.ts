import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDirectionComponent } from './sale-direction.component';

describe('SaleDirectionComponent', () => {
  let component: SaleDirectionComponent;
  let fixture: ComponentFixture<SaleDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
