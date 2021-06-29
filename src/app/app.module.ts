import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { Ng2IziToastModule } from 'ng2-izitoast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormNewProductComponent } from './form-new-product/form-new-product.component';
import { FormEditProductComponent } from './form-edit-product/form-edit-product.component';
import { SaleDetailComponent } from './sale-detail/sale-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SaleDetailPrincipalComponent } from './sale-detail-principal/sale-detail-principal.component';
import { SaleDirectionComponent } from './sale-direction/sale-direction.component';
import { SalePayMethodComponent } from './sale-pay-method/sale-pay-method.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'sale',
        component: SaleDetailPrincipalComponent,
        children: [
          {
            path: 'saleDetail',
            component: SaleDetailComponent,
          },
          {
            path: 'saleDirection',
            component: SaleDirectionComponent,
          },
          {
            path: 'pay',
            component: SalePayMethodComponent,
          },
        ],
      },
    ],
  },
  {
    path: 'productos',
    component: CrudProductComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CrudProductComponent,
    NavbarComponent,
    FooterComponent,
    FormNewProductComponent,
    FormEditProductComponent,
    SaleDetailComponent,
    HomeComponent,
    LoginComponent,
    PrincipalComponent,
    SaleDetailPrincipalComponent,
    SaleDirectionComponent,
    SalePayMethodComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)],
    Ng2SearchPipeModule,
    TooltipModule,
    PaginationModule.forRoot(),
    Ng2IziToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
