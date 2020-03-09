
## 创建
mkdir react_app
cd react_app
npm init -y  // 生成package.json
touch .gitigonre

## 安装 swipe轮播图
npm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe antd qs @types/qs -S
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
npm i typescript ts-loader source-map-loader style-loader css-loader less-loader url-loader file-loader -D
npm i redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger redux-promise @types/redux-promise -S
npm i connected-react-router -S
npm i express express-session body-parser cors axios -S

## 初始化  tsc --init
{
  "compilerOptions": {
    "target": "es5",             /* 转化es5语法*/         
    "module": "commonjs",/*模块规范 */
    "jsx": "react",          /* jsx语法用react */
    "sourceMap": true,                     /*  ts-js时候,生成sourceMap文件*/
    "outDir": "./dist",                        /* 输出路径   */
    <!-- "strict": true,                           /* */ -->
    "noImplicitAny": true,                 /* 一定要有类型 */
    "esModuleInterop": true,       /* es6和commonjs模块互相引用,兼容所有模块方案导入*/
  },
  "include": [
    "./src/**/*",  /* 此目录下都需要ts编译*/
  ]
}

## 配置webpack.config.js

配置看webpack.config.js文件

package.json 增加
    "build": "webpack",
    "dev": "webpack-dev-server"

执行 npm run dev
启动服务