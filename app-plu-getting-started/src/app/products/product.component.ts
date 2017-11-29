import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _productService: ProductService) { }

  ngOnInit() {
    const param = +this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    );
  }

}
