import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from "./product";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {


    @Input() product: Product;
    @Output() onDelete: EventEmitter<boolean> = new EventEmitter();

    constructor() { }

    ngOnInit() {

    }

    private delete(): void {
        this.onDelete.emit(true);
    }

}