import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductsComponent,
  ],
  providers: [
    ProductGuardService,
    ProductService
  ]
})
export class ProductModule { }
