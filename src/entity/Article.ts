import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  tags: string;

  @Column("text")
  content: string;

  @Column()
  createTime: number = null;
} 