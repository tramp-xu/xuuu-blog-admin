import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
  // PrimaryGeneratedColumn 參數为 uuid 表示生成唯一的uuid字符串
  @PrimaryGeneratedColumn("uuid")
  uuid: number;

  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  grade: string = 'custom';

  @CreateDateColumn({
    type: "timestamp"
  })
  createdDate: Date;

  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;
} 