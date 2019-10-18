import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  title: string;

  @Column("simple-array")
  tags: string[];

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

} 
