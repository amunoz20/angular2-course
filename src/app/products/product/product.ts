

export class Product {

    public name: string;
    public price: number;
    public description?: string;
    public pictures?: Array<any>;

    constructor(name: string, price: number, description?: string, pictures?: Array<any>) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.pictures = pictures;
    }

}