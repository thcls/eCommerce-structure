import { ProductsService } from './products.service';
import { Response } from 'express';
import { ProductEntity } from './product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getAllProducts(response: Response, limit?: number): Promise<Response<any, Record<string, any>>>;
    findOne(id: string): Promise<ProductEntity>;
    findCategoryProducts(name: string): Promise<ProductEntity[]>;
    getNext16(offset: string): Promise<ProductEntity[]>;
}
