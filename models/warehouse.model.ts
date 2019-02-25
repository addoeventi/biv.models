import { Product } from './product.model';
import { Discharge } from './discharge.model';
import { ShoppingList } from './shopping-list.model';
import { Outgo } from "./outgo.model";

export class Warehouse {
    public guid: string;
    public name: string;
    public products: Product[] = [];
    public discharges: Discharge[] = [];
    public shoppingList: ShoppingList;
    public history: Outgo[] = []
    public modified: Date;
}