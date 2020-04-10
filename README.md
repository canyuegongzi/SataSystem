## 项目说明
### **重要提示**：
1. **在项目中的登录注册模块中，因为采用的是阿里云的短信服务，每分钟每小时会有短信数量的限制**
2. **项目只有pc端，没有做移动端的适配，建议在pc端预览**
3. **注册完成默认为普通用户,权限管理及用工注册功能无法使用**
### **目录说明**
**webSystem_server**：
服务器源码  【】https://github.com/canyuegongzi/SataSystem_server

**dist**： 
打包后的项目文件
### 准备
#### **服务器端**：
进入**webSystem_server**目录

1:方式一：
```
   cd webSystem_server
   npm install
```
2:方式二：

```
    git@github.com:canyuegongzi/SataSystem_server.git
    npm install
```
#### **客户端**：
```
    npm install
```
### 项目运行
#### 服务器运行：
```
    node build/server/server.js
```
或者
```
    nodemon build/server/server.js   //主要用于调试服务端代码 
```
因为项目经过了简单的部署，所以在启动服务器后可以直接在8000端口浏览效果；如果想调试项目的话，可以启动项目的源码配合服务器调。
#### 客户端运行：
启动
```
    npm run start
```
### 项目预览： http://canyuegongzi.xyz/WebSystem/#/ 
一是没有做反向代理，node在文件系统方面并不好，再就是代码没有做优化，所以首次加载时间会有些长！稍等一下即可
### **在项目中的一些问题及心得之后会在博客中做相应的更新**
