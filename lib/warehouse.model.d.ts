import { Product } from './product.model';
import { Discharge } from './discharge.model';
import { ShoppingList } from './shopping-list.model';
import { Outgo } from "./outgo.model";
export declare class Warehouse {
    guid: string;
    name: string;
    products: Product[];
    discharges: Discharge[];
    shoppingList: ShoppingList;
    history: Outgo[];
    modified: Date;
}
