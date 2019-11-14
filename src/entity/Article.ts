import { Entity, Column, JoinTable, OneToOne, JoinColumn, Index, ManyToMany } from "typeorm";
import { ArticleDetail } from "./ArticleDetail"
import { Tag } from "./Tag"
import { Base } from "./Base"

@Entity()
export class Article extends Base {
  @Column({
    nullable: false,
    length: 100
  })
  @Index({unique: true})
  title: string;

  @Column("text")
  shorter: string;

  @ManyToMany(type => Tag, tag => tag.articles)
  @JoinTable({
    name: 'article_tags',
    joinColumns: [
      {name: 'article_id'}
    ],
    inverseJoinColumns: [
      {name: 'tag_id'}
    ]
  })
  tags: Tag[];

  // @Column("simple-array")
  // tags: string[];

  @Column()
  viewCount: number = 0;

  @OneToOne(type => ArticleDetail, detail => detail.article)
  @JoinColumn()
  detail: ArticleDetail;
} 

