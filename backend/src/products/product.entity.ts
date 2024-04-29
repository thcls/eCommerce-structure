import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ length: 50 })
    name: string;
    
    @Column({ length: 10 })
    sku: string;
    
    @Column()
    category_id: number;
    
    @Column({ length: 250 })
    description: string;
    
    @Column({ length: 500 })
    large_description: string;
    
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
    
    @Column('decimal', { precision: 10, scale: 2, nullable: true })
    discount_price: number;
    
    @Column('numeric', { nullable: true })
    discount_percent: number;
    
    @Column()
    is_new: boolean;
    
    @Column({ length: 1000, nullable: true })
    image_link: string;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    create_date: Date;
    
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    update_date: Date;
}