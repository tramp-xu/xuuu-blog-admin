
### 打包

- yarn build 或 npm run build

### 生产环境启动

- 生产环境使用 pm2 启动 可以达到负载均衡 执行：yarn pro 或 npm run pro （生产环境端口默认：8080）

## 友情链接

- Koa2 [Koa (koajs) -- 基于 Node.js 平台的下一代 web 开发框架 \| Koajs 中文文档](https://koa.bootcss.com/)
- Typescript [TypeScript 中文网 · TypeScript——JavaScript 的超集](https://www.tslang.cn/)

## 项目调试

```
// launch.json 配置
{
  // 使用 IntelliSense 了解相关属性。
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [{     
      "name": "调试工程",
      "type": "node",
      "request": "launch",
      "args": ["${workspaceRoot}/src/index.ts"],  // 当前文件
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],  // --nolazy: 告诉v8引擎提前编译代码，以便断点正常工作 -r ts-node/register: 这可以确保在执行代码之前加载ts-node
      "sourceMaps": true, 
      "cwd": "${workspaceRoot}",  // 将工作目录设置为项目根目录
      "protocol": "inspector",    // 将节点调试协议设置为V8 Inspector模式
  }]
}
```