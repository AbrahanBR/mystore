import { Component, OnInit } from '@angular/core';
import { Shipping } from '../product-interface';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shiping',
  templateUrl: './shiping.component.html',
  styleUrls: ['./shiping.component.scss']
})
export class ShipingComponent implements OnInit {
  public shippingCos$: Observable<Shipping>;
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCos$ = this.cartService.getShippingPrices();
  }
}
