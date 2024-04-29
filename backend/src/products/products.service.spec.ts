import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let productRepository: Repository<ProductEntity>
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    productRepository = module.get<Repository <ProductEntity>>(getRepositoryToken(ProductEntity))
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
