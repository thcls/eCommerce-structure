import { Controller, Get, Res, Query, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Response } from 'express';
import { ProductEntity } from './product.entity';
@Controller('/products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService
    ){}
    @Get()
    async getAllProducts(@Res() response: Response, @Query('limit') limit?: number){
        const products = await this.productsService.findAllProducts(limit)
        return response.status(200).json(products)
    }
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductEntity> {
        return await this.productsService.findProductById(parseInt(id, 10));
    }
    @Get('/category/:category_id')
    async findCategoryProducts(@Param('name') name: string): Promise<ProductEntity[]> {
        return await this.productsService.findProductByCategory(name);
    }
    @Get('/next-16/:offset')
    async getNext16(@Param('offset') offset: string): Promise<ProductEntity[]> {
      // Assuming you pass the offset as a query parameter
      const offsetNum = parseInt(offset, 10) || 0;
      return await this.productsService.getNext(offsetNum);
    }

}
 