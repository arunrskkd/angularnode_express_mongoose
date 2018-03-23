import { Product } from "../shopping/product.model";

export class Boughtitem{
    constructor(public  productdetails:Product,public deladdress:string){}
}