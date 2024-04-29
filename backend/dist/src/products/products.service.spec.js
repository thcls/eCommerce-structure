"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./product.entity");
const typeorm_1 = require("@nestjs/typeorm");
describe('ProductsService', () => {
    let service;
    let productRepository;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [products_service_1.ProductsService],
        }).compile();
        service = module.get(products_service_1.ProductsService);
        productRepository = module.get((0, typeorm_1.getRepositoryToken)(product_entity_1.ProductEntity));
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=products.service.spec.js.map