## 使用 vsCode 自带的调试工具

配置 launch.json

```
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

目前这样可以打断点但是无法支撑热更新