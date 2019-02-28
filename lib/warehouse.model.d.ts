import { Product } from './product.model';
import { Discharge } from './discharge.model';
import { ShoppingList } from './shopping-list.model';
import { Outgo } from "./outgo.model";
import { Barman } from "./barman.model";
export declare class Warehouse {
    guid: string;
    name: string;
    code: string;
    barmanCodes: Barman[];
    products: Product[];
    discharges: Discharge[];
    shoppingList: ShoppingList;
    history: Outgo[];
    created: Date;
    modified: Date;
}
