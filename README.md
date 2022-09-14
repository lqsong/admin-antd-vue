# admin-antd-vue

此分支是 Webpack + Vue3.x + antd 版本 ， Vite 版本请查看 vite (分支)（[github](https://github.com/lqsong/admin-antd-vue/tree/vite)、[gitee](https://gitee.com/lqsong/admin-antd-vue/tree/vite)）

## Demo

**注意：Demo 用的是在线mock服务，不稳定，若在线登录不了pull到本地可直接运行查看demo**

| **[基于IndexLayout](http://demo.admin-antd-vue.liqingsong.cc/)**  |
:-------------------------:
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/indexlayout/home1.png)  |
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/indexlayout/home2.png)  |


| **[基于UniversalLayout](http://demo-universal.admin-antd-vue.liqingsong.cc/)**  |
:-------------------------:
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/universallayout/home1.png)  |
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/universallayout/home2.png)  |
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/universallayout/home3.png)  |
| ![Home](http://admin-antd-vue.liqingsong.cc/webpackts/images/universallayout/home4.png)  |

## Vue3实战案例

- lqsblog-frontend-admin-vue（[Github](https://github.com/lqsong/lqsblog-frontend-admin-vue) 、 [Gitee](https://gitee.com/lqsong/lqsblog-frontend-admin-vue)）




## 使用文档

 - [http://admin-antd-vue.liqingsong.cc](http://admin-antd-vue.liqingsong.cc/)
 - [Github](https://github.com/lqsong/admin-antd-vue) 
 - [Gitee](https://gitee.com/lqsong/admin-antd-vue)


## 后台前端解决方案列表

 - admin-element-vue（[GitHub](https://github.com/lqsong/admin-element-vue)、[Gitee](https://gitee.com/lqsong/admin-element-vue)）
 - admin-antd-vue（[GitHub](https://github.com/lqsong/admin-antd-vue)、[Gitee](https://gitee.com/lqsong/admin-antd-vue)）
 - admin-antd-react（[GitHub](https://github.com/lqsong/admin-antd-react)、[Gitee](https://gitee.com/lqsong/admin-antd-react)）
 - electron-admin-element-vue（[GitHub](https://github.com/lqsong/electron-admin-element-vue)、[Gitee](https://gitee.com/lqsong/electron-admin-element-vue)）
 - electron-admin-antd-vue（[GitHub](https://github.com/lqsong/electron-admin-antd-vue)、[Gitee](https://gitee.com/lqsong/electron-admin-antd-vue)）
 - electron-admin-antd-react（[GitHub](https://github.com/lqsong/electron-admin-antd-react)、[Gitee](https://gitee.com/lqsong/electron-admin-antd-react)）
 - admin-vue3-micro-qiankun（[GitHub](https://github.com/lqsong/admin-vue3-micro-qiankun)、[Gitee](https://gitee.com/lqsong/admin-vue3-micro-qiankun)）
 
## 前台前端SSR解决方案列表

 - midway-vue3-ssr（[GitHub](https://github.com/lqsong/midway-vue3-ssr)、[Gitee](https://gitee.com/lqsong/midway-vue3-ssr)）
 - midway-react-ssr（[GitHub](https://github.com/lqsong/midway-react-ssr)、[Gitee](https://gitee.com/lqsong/midway-react-ssr)）

## 功能

```
- 登录 / 注销 / 注册

- 权限验证
  - 页面权限
  - 按钮操作
  - 权限配置

- 全局功能
  - 国际化多语言
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑（支持自定义配置）
  - 动态顶级菜单（IndexLayout支持设置是否启用）
  - 菜单导航模式inline/horizontal切换（UniversalLayout支持）
  - 主题dark/light切换（UniversalLayout支持）
  - Svg Sprite 图标
  - Mock 数据

- 综合实例
  - 引导页
  - 组件示例
    - 编辑器
      - CKEditor
      - tui-editor
    - 图标
      - IconSvg
      - IconFont
  - 页面示例
    - 列表页面
      - 标准列表
      - 表格列表
      - 高度自适应表格
      - 搜索列表
    - 表单页面
      - 基础表单
      - 高级表单      
    - 详情页面
      - 基础详情
      - 模块详情
      - 表格详情
  - 权限验证
```


## 自定义配置

### **(建议)** 本地或开发模式下，不要直接修改 '.env.development'
复制 '.env.development' 重命名为 ' .env.development.local' , 修改对应的参数.

### **(建议)** 生产模式下，不要直接修改 '.env.production'
复制 '.env.production' 重命名为 ' .env.production.local' , 修改对应的参数.


## 项目设置

### 一、Install dependencies,

```bash
$ yarn
```

or

```
$ npm install
```

> 推荐使用 yarn , **[yarn安装与常用命令](http://liqingsong.cc/article/detail/9)** 。

### 二、Compiles and hot-reloads for development

```bash
$ yarn serve
```

or

```
$ npm run serve
```


### 三、Compiles and minifies for production

```bash
$ yarn build
```
or

```
$ npm run build
```

### 四、精简 svg icon

```
$ yarn svgo
```

or

```
$ npm run svgo
```

### 五、Run your unit tests
```
yarn test:unit

#

npm run test:unit
```

### 六、Lints and fixes files
```
yarn lint

#

npm run lint
```


## 捐赠

如果你觉得这个项目帮助到了你，请帮助点击 Star，你也可以请作者喝咖啡表示鼓励.

**ALIPAY**             |  **WECHAT**
:-------------------------:|:-------------------------:
![Alipay](http://uploads.liqingsong.cc/20210430/f62d2436-8d92-407d-977f-35f1e4b891fc.png)  |  ![Wechat](http://uploads.liqingsong.cc/20210430/3e24efa9-8e79-4606-9bd9-8215ce1235ac.png)

