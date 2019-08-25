import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { Product } from '../product-interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public product: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const id = +param.get('productTd');
      this.product = products[id];
    });
  }

  public addToCart(product: Product): void {
    window.alert('your product has been added to the cart');
    this.cartService.addToCart(product);
  }
}
