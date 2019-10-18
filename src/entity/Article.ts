import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { ArticleDetail } from "./ArticleDetail"

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

  @Column()
  viewCount: number = 0;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(type => ArticleDetail, detail => detail.article)
  @JoinColumn()
  detail: ArticleDetail;
} 

