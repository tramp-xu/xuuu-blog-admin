import { Context } from "koa";
import { getManager } from "typeorm";
import { User } from "../../entity/User";

/**
 *  all users actions from the database.
 */
export async function getAllUser (context: Context) {
    const repository = getManager().getRepository(User);
    const users = await repository.find();
    context.body = users;
}

export async function addUser (context: Context) {
    const repository = getManager().getRepository(User);
    const newUser = repository.create(context.request.body)
    await repository.save(newUser);
    context.body = newUser;
}

export async function updateUser (context: Context) {
    const data = context.request.body
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findByIds(data.id)
    dbUser = data
    await repository.save(dbUser);
    context.body = dbUser;
}

export async function getUserInfo (context: Context) {
    const data = context.request.body
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findByIds(data.id)
    context.body = dbUser;
}