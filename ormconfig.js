const env = process.env.NODE_ENV;
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: `${env === 'dev' ? '123456' : 'Xuuu@911'}`,
  database: 'myblog',
  synchronize: `${env === 'dev' ? true : false}`,
  logging: `${env === 'dev' ? true : false}`,
  entities: [`${env === 'dev' ? 'src' : 'dist'}/entity/*{.ts,.js}`]
};