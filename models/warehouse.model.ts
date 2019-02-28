import { Product } from './product.model';
import { Discharge } from './discharge.model';
import { ShoppingList } from './shopping-list.model';
import { Outgo } from "./outgo.model";
import { Barman } from "./barman.model";

export class Warehouse {
    public guid: string;
    public name: string;
    public code: string;
    public barmanCodes: Barman[];
    public products: Product[] = [];
    public discharges: Discharge[] = [];
    public shoppingList: ShoppingList;
    public history: Outgo[] = [];
    public created: Date = new Date();
    public modified: Date;
}