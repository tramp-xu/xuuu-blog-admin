import { Context } from "koa";
import { getManager, getRepository } from "typeorm";
import { Tag } from "../../entity/Tag";

/**
 *  all users actions from the database.
 */

export async function getAllTag (context: Context) {
    const repository = getManager().getRepository(Tag);
    
    const tags = await repository
    .createQueryBuilder("tag")
    .select(["id", "created_by", "name"])
    .addSelect("COUNT(DISTINCT article_id)", "count") // DISTINCT 解決mysql查询null显示1的问题
    .leftJoin('article_tags', "aat", "tag.id = aat.tag_id")
    .where("status = :status", {status: 0})
    .groupBy("tag.id")
    .printSql()
    .getRawMany()

    // const qb = await repository
    // .createQueryBuilder("tag")

    // const tags = qb
    // .select("COUNT('DISTINCT' 'article_id')", "count")  
    // .from(qp => {
    //     qp.select(["id", "created_by", "name"])
    //     .addSelect("COUNT(*)", "count")
    //     .leftJoin('article_tags', "aat", "t.id = aat.tag_id")
    //     .where("status = :status", {status: 0})
    //     .groupBy("t.id")
    // }, 't')
    // .getRawMany()

    context.body = {
        code: 200,
        data: tags
    };
}


export async function getTagInfo (context: Context) {
    const id = context.query.id
    const repository = getManager().getRepository(Tag);
    const tag = await repository.findOne(id);

    // if post was not found return 404 to the client
    if (!tag) {
        context.status = 404;
        return;
    }
    context.body = {
        code: 200,
        data: tag
    };
}

export async function addTag (context: Context) {
    const repository = getManager().getRepository(Tag);
    const data = context.request.body
    const { name } = data

    let db = await repository.findOne({ name })
    if (db) {
        context.body = {
            code: 0,
            message: `${name} 已创建，请修改`
        }
    } else {
        const tag = new Tag()
        tag.name = name

        await repository.save(tag);
        context.body = {
            code: 200,
            message: `创建成功`,
            data: tag
        }
    }  
}

export async function updateTag (context: Context) {
    const repository = getManager().getRepository(Tag);
    const data = context.request.body
    let db = await repository.findOne(data.id)
    db.name = data.name
    await repository.save(db);
    context.body = {
        code: 200,
        message: "标签更新成功"
    };
}

export async function deleteTag (context: Context) {
    const repository = getManager().getRepository(Tag);
    const data = context.request.body
    let db = await repository.findOne(data.id)
    // db.status = 1
    await repository.remove(db);
    context.body = {
        code: 200,
        message: `标签${db.name}已删除`
    };
}

export async function getTagsByIds (ids) {
    const repository = getManager().getRepository(Tag);
    return await repository.findByIds(ids)
}
