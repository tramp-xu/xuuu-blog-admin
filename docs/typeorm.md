## typeorm + mysql 模式介绍

有了 typeorm 操作数据库比较简单，不需要你去写 sql 语句，比较快捷，不过目前还有几个问题一直没有解决。 

#### 安装相关依赖
```
yarn add mysql typeorm reflect-metadata
```

#### orm 配置

```
// 会默认读取项目根目录下的 ormconfig.js/.json 文件

const env = process.env.NODE_ENV; // 获取环境信息，判断是否是开发环境
module.exports = {
  type: 'mysql', // 不同数据库需要填写对应的 type
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: `${env === 'dev' ? '123456' : 'Xuuu@911'}`,
  database: 'myblog',
  synchronize: `${env === 'dev' ? true : false}`,
  logging: `${env === 'dev' ? true : false}`,
  // entities 是声明所有实体的入口
  entities: [`${env === 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`] 
};
```


#### 初始化建立连接
必须先引入 reflect-metadata， typeorm 模块

```
import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {
  ... ...
  // 初始化 koa 等等
}).catch(error => console.log("TypeORM connection error: ", error));
```

#### 简单的例子

```
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
```