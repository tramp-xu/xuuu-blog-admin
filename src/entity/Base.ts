import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class Base {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({
      select: false
    })
    created_time: Date;

    @Column({ length: 100 })
    created_by: string = 'Jerome Hsu';

    @UpdateDateColumn({
      select: false
    })
    updated_time: Date;

    @Column({ length: 100, select: false })
    updated_by: string = 'Jerome Hsu';
}
