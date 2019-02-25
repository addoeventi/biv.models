import { newGuid } from 'ts-guid';
import { Product } from './product.model';

export class ShoppingList {
    public guid: string = newGuid();
    public products: Product[] = [];
    public discharges: string[] = [];
}