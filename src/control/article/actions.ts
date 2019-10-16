import { Context } from "koa";
import { getManager } from "typeorm";
import { Article } from "../../entity/Article";
import * as dayjs from "dayjs";

/**
 *  all users actions from the database.
 */

 interface IArticle {
     title: string,
     content: string,
     tags?: string[]
 } 

export async function getAllArticle (context: Context) {
    const repository = getManager().getRepository(Article);
    const articles = await repository.find();
    context.body = {
        code: 200,
        data: articles
    };
}

export async function addArticle (context: Context) {
    const repository = getManager().getRepository(Article);
    const data:IArticle = context.request.body
    const { title, tags, content } = data
    const tagsStr = tags.join(',')
    const createTime = dayjs().unix()
    const newArticle = repository.create({
        title,
        content,
        tags: tagsStr,
        createTime
    })
    await repository.save(newArticle);
    context.body = {
        code: 200,
        message: `发布成功`,
        data: newArticle
    }
}

export async function updateArticle (context: Context) {
    const repository = getManager().getRepository(Article);
    const data = context.request.body
    let db = await repository.findByIds(data.id)
    db = data
    await repository.save(db);
    context.body = {
        code: 200,
        message: "文章更新成功",
        data: db
    };
}