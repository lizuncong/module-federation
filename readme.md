### webpack5新特性介绍
- 启动命令
- 持久化缓存
- 资源模块
- moduleIds & chunkIds 的优化
- 更智能的 tree shaking
- nodejs的polyfill脚本被移除
- 模块联邦


### 模块联邦
####动机
- Module Federation的动机是为了不同开发小组间共同开发一个或者多个应用
- 应用将被划分为更小的应用块，一个应用块，可以是比如头部导航或者侧边栏的前端组件，也可以是数据获取逻辑的逻辑组件
- 每个应用块由不同的组开发
- 应用或应用块共享其他应用块或者库


#### Module Federation
- 使用Module Federation时，每个应用块都是一个独立的构建，这些构建都将编译为容器
- 容器可以被其他应用或者其他容器应用
- 一个被引用的容器被称为 remote， 引用者被称为host， remote 暴露模块给host， host则可以使用这些暴露的模块，这些模块被称为remote模块


#### 配置参数
- name。必传值，即输出的模块名，被远程引用时路径为${name}/${expose}
- library。声明全局变量的方式，name为umd的name
- filename。构建输出的文件名
- remotes。远程引用的应用名及其别名的映射，使用时以key值做为name
- exposes。被远程引用时可暴露的资源路径及其别名
- shared。与其他应用之间可以共享的第三方依赖，使你的代码中不用重复加载同一份依赖

#### remote

