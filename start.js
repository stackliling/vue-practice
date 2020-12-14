// 参考: https://blog.csdn.net/qq_26733915/article/details/80461257
// 项目启动后,命令行交互界面
const inquirer = require('inquirer');

const exec = require("child_process").execSync;

const promptList = [
  // 具体交互内容
  {
    type: 'list',
    message: '请选择操作类型',
    name: 'command',
    // default: "start",
    choices: [
      {
        name: '01、项目启动',
        value: 'npm run serve',
      },
      {
        name: '02、项目打包',
        value: 'npm run build',
      },
      {
        name: '03、项目部署',
        value: 'npm run build',
      }
    ],
  }
];

inquirer.prompt(promptList)
  .then(({ command }) => {
    // command为promptList每一项的name
    console.log(command); // 返回的结果
    // 执行命令
    exec(command, { 
      // 子进程的 stdio 配置
      stdio: 'inherit'
    });
})