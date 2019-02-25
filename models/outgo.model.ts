import { newGuid } from "ts-guid";
import { Product } from "./product.model";

export class Outgo {
    public guid: string = newGuid();
    public total: number;
    public products: Product[] = [];
    //** Image saved in base64 */
    public receipt: string;
}