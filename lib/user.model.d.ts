import { Warehouse } from './warehouse.model';
export declare class User {
    guid: string;
    provider: string;
    username: string;
    password: string;
    fullname: string;
    name: string;
    surname: string;
    phone: string;
    img_profile: string;
    defaultAddress: {
        fullAddress: string;
        lat: number;
        lng: number;
    };
    created: Date;
    modified: Date;
    permissions: string[];
    lovedEvents: string[];
    preferences: string[];
    warehouses: Warehouse[];
}
