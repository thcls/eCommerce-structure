/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ProductEntity } from './products/product.entity';

import * as dotenv from 'dotenv'
dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: true,
    entities: [ProductEntity]
  }), ProductsModule],

  controllers: [],
  providers: [],
})
export class AppModule {}
