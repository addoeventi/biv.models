import { newGuid } from "ts-guid";

export class Product {
    public guid: string = newGuid()
    public name: string;
    public price: number;
    public qta: number;
}