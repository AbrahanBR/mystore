import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product-interface';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss']
})
export class ProductAlertComponent implements OnInit {
  @Input() product: Product;

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
