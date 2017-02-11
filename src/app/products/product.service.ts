import { Injectable } from "@angular/core";
import { Product } from "./product/product";


@Injectable()
export class ProductsService {

    public getAll(): Array<Product> {
        let products: Array<Product> = [
            new Product("Zucartias", 40.00, "Las mejores zucaritas del tigre juanpi."),
            new Product("Leche Lala", 20.00, "Directo de Torreón."),
            new Product("Bocinas BOSE", 1500.00, "Recomendadas por Juanpi."),
            new Product("PC Generica - Alex", 1500.00, "NVIDIA 1237621, Inter Core i7.")
        ];
        console.log("Shipped products!");
        return products;
    }

}