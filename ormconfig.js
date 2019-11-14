const env = process.env.NODE_ENV;
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: `${env === 'production' ?  'Xuuu@911': '123456'}`,
  database: 'myblog',
  synchronize: `${env === 'production' ? false : true}`,
  logging: `${env === 'production' ? false : true}`,
  entities: [`${env === 'production' ? 'dist' : 'src'}/entity/*{.ts,.js}`]
};