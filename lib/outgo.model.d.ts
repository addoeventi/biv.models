import { Product } from "./product.model";
export declare class Outgo {
    guid: string;
    total: number;
    products: Product[];
    created: Date;
    receipt: string;
}
