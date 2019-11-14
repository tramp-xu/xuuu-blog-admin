import { Context } from "koa";
import { getManager } from "typeorm";
import { Article } from "../../entity/Article";
import { ArticleDetail } from "../../entity/ArticleDetail";
import { Tag } from "../../entity/Tag";
import { getTagsByIds } from "../tag/actions"
// import * as dayjs from "dayjs";

/**
 *  all users actions from the database.
 */

 interface TagModel {
     name: string
     id: number
 }

 interface IArticle {
     title: string,
     content: string,
     tags?: TagModel[]
 } 

//  userRepository.find({
//     select: ["firstName", "lastName"],
//     relations: ["profile", "photos", "videos"],
//     where: {
//         firstName: "Timber",
//         lastName: "Saw"
//     },
//     order: {
//         name: "ASC",
//         id: "DESC"
//     },
//     skip: 5,
//    // 分页条数   
//     take: 10,
//     cache: true
// });

export async function getAllArticle (context: Context) {
    const repository = getManager().getRepository(Article);

    // const articles = repository.createQueryBuilder('article').select().getMany()
    // const articles = await repository.find({
    //     join: {
    //         alias: 'article',
    //         leftJoinAndSelect: {
    //             tags: "article.tags"
    //         }
    //     }
    // });
    const articles = await repository.find({
        relations: ["tags"]
    });
    context.body = {
        code: 200,
        data: articles
    };
}

export async function getAllArticleInfo (context: Context) {
    const repository = getManager().getRepository(Article);
    const articles = await repository.find({
        relations: ["detail", "tags"]
    });
    context.body = {
        code: 200,
        data: articles
    };
}
// export async function getAllArticleInfo (context: Context) {
//     const repository = getManager().getRepository(Article);
//     const articles = await repository.find({relations: ["detail"]});
//     context.body = {
//         code: 200,
//         data: articles
//     };
// }

export async function getArticleInfo (context: Context) {
    const id = context.query.id
    const repository = getManager().getRepository(Article);
    const articles = await repository.findOne(id, {
        relations: ["detail"]
    });

    // if post was not found return 404 to the client
    if (!articles) {
        context.status = 404;
        return;
    }
    context.body = {
        code: 200,
        data: articles
    };
}

export async function addArticle (context: Context) {
    const repository = getManager().getRepository(Article);
    const infoRep = getManager().getRepository(ArticleDetail);
    // const tagRep = getManager().getRepository(Tag);
    const data:IArticle = context.request.body
    const { title, tags, content } = data
    const reg = /(.*\n){8}/
    const arrs = content.match(reg)
    const articleInfo = new ArticleDetail()
    articleInfo.content = content
    let shorter = (arrs && arrs.length) ? arrs[0] : content
    await infoRep.save(articleInfo)

    let tagEnts = await getTagsByIds(tags)
    const newArticle = repository.create({
        title: title,
        shorter: shorter,
        tags: tagEnts,
        detail: articleInfo
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
