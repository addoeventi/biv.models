import { Warehouse } from './warehouse.model'
export class User {
    public guid: string
    public provider: string
    public username: string
    public password: string
    public fullname: string
    public name: string
    public surname: string
    public phone: string
    public img_profile: string
    public defaultAddress: { fullAddress: string, lat: number, lng: number }
    public created: Date
    public modified: Date
    public permissions: string[]
    public lovedEvents: string[]
    public preferences: string[]

    public warehouses: Warehouse[];
}