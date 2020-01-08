//We include the following import statements as we access the Supplier and Rating objects in the
//following Product class
import { Supplier } from "./supplier.model";
import { Rating } from "./rating.model";

export class Product {
  constructor(
    public productId?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public supplier?: Supplier,
    public ratings?: Rating[]
  ) { }
}
