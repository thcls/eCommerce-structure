import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    findAllProducts(limit?: number): Promise<ProductEntity[]>;
    findProductById(id: number): Promise<ProductEntity>;
    findProductByCategory(name: string): Promise<ProductEntity[]>;
    getNext(offset: number): Promise<ProductEntity[]>;
}
