import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDetailPrincipalComponent } from './sale-detail-principal.component';

describe('SaleDetailPrincipalComponent', () => {
  let component: SaleDetailPrincipalComponent;
  let fixture: ComponentFixture<SaleDetailPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDetailPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDetailPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
