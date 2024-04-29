import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>
    ){}
    async findAllProducts(limit?:number):Promise<ProductEntity[]>{
        const productsData = await this.productRepository.find({take: limit})
        return productsData;
    }
    async findProductById(id: number): Promise<ProductEntity> {
        return await this.productRepository.findOne({where:{id:id}});
    }
    async findProductByCategory(name: string): Promise<ProductEntity[]> {
        return await this.productRepository.find({where:{name:name}});
    }
    async getNext(offset: number): Promise<ProductEntity[]> {
        return await this.productRepository.find({
            take: 16, 
            skip: offset, 
        });
    }
}
