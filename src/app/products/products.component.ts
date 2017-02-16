import { Component, OnInit } from '@angular/core';
import { Product } from "./product/product";
import { ProductsService } from "./product.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

    private products: Array<Product> = [];
    private productService: ProductsService;

    constructor(productService: ProductsService) {
        this.productService = productService;
        this.products = this.productService.getAll();
    }

    ngOnInit() {
    }

    private removeProduct(productIndex: number): void {
        this.products.splice(productIndex, 1);
    }
}