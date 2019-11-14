import { Entity, Column, JoinColumn, ManyToMany, Index } from "typeorm";
import { Article } from "./Article"
import { Base } from "./Base"

@Entity('tag')
export class Tag extends Base {

  @Column({
    nullable: false
  })
  @Index({
    unique: true
  })
  name: string;

  @Column()
  status: number = 0

  @ManyToMany(type => Article, article => article.tags, { cascade: true })
  @JoinColumn()
  articles: Article[];
} 

