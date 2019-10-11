import { Context } from "koa";
import { getManager } from "typeorm";
import { User } from "../../entity/User";

/**
 *  all users actions from the database.
 */
export async function getAllUser (context: Context) {
    const repository = getManager().getRepository(User);
    const users = await repository.find();
    context.body = {
        code: 200,
        data: users
    };
}

export async function addUser (context: Context) {
    const data = context.request.body
    const { username } = data
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findOne({ username })
    if (dbUser) {
        context.body = {
            code: 0,
            message: `${username} 已注册，请修改用户名`
        }
    } else {
        const newUser = repository.create(data)
        await repository.save(newUser);
        context.body = {
            code: 200,
            message: `注册成功`,
            data: newUser
        }
    }
}

export async function updateUser (context: Context) {
    const data = context.request.body
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findByIds(data.id)
    dbUser = data
    await repository.save(dbUser);
    context.body = {
        code: 200,
        data: dbUser
    };
}

export async function getUserInfo (context: Context) {
    const data = context.request.body
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findByIds(data.id)
    context.body = dbUser;
}

export async function login (context: Context) {
    const data = context.request.body
    const { username, password } = data
    const repository = getManager().getRepository(User);
    let dbUser = await repository.findOne({ username })
    if (dbUser) {
        if (password === dbUser.password) {
            context.body = {
                code: 200,
                message: `欢迎回来，${username}`
            }
        } else {
            context.body = {
                code: 0,
                message: `密码错误`
            }
        }
    } else {
        context.body = {
            code: 0,
            message: '账号不存在，请检查'
        }
    }
}