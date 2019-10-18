import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Article } from "./Article"

@Entity()
export class ArticleDetail {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;
  
  @OneToOne(type => Article, article => article.detail)
  article: Article;
}
