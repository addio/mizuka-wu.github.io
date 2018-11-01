---
title: 学js很简单，就是有点头冷
tags:
  - 前端
  - 教程
  - javascript
  - 笔记
date: 2018-11-01 17:25:25
categories: 学习笔记
---
# 学js很简单，就是有点头冷
> 对老angularjs项目进行改造以及迁移到vue，其中遇到了很多困难点以及很多js原理性的东西，在这里进行收集以及汇总

## 一些工具网站的推荐
> 在我刚入行的2016年，前端js的工程化也才刚刚兴起，虽然还是有很多网站还在完全使用jquery，css和js的引入方法仍然靠手工往html文件里插，现在完全都不一样了，node.js的出现，催生了express,gulp，webpack等等，整个前端开始完全工程化，源代码，生成，开发测试服务器，代码格式化，自动生成注释，甚至连编辑器都，当然啦，这样也催生了很多问题，比如webpack的另一面也是以配置繁琐而出名，以下顺便介绍几个小网站，可以自动生成新建一个项目的常用配置

* **gitignore** 告知git系统中哪些文件不需要进入git，推荐[gitignore.io](https://www.gitignore.io/),只要输入目标语言以及编辑器即可 [一个vue的例子](https://www.gitignore.io/api/node,vuejs,webstorm,visualstudiocode)
* **license** 授权文件，有时候这个是维权的好东西[https://choosealicense.com/](https://choosealicense.com/)
* **兼容性检查** 查看你要用的特性是否支持，万恶的ie基本都是红的[caniuse](https://caniuse.com/#search=fetch),虽然很多可以通过各种polyfill进行解决，不过总是有几个漏网之鱼不是么
* **polyfill** babel的转码只会转语法，一些基于浏览器的特性是不会进行转码的，比如Promise需要引入专用的promise-polyfill，推荐一个能够自动注入的网站[polyfill.io](https://polyfill.io/v2/docs/)
* **渐变生成** 生成css渐变色很麻烦？ [试试这个](http://www.colorzilla.com/gradient-editor/)
* **其他辅助** 从正则到css到box-shadow，这个网站应有尽有[http://tools.jb51.net/aideddesign/css3_boxshadow](http://tools.jb51.net/aideddesign/css3_boxshadow)

## 基本知识
### js版本
js有几个主要阶段，ES3，ES5，ES6，ES7，ES8，其中最为重要的大概就是es5，es6了，es5是目前浏览器支持最为广泛的一个版本（因为IE），es6相当于现代浏览器的一个标志，ES6中大量新特性的加入，使得本身很多困恼前端的问题，比如作用域提升啊，回调地狱啊等，都有了很大程度的提升以及弥补，当然因为不是所有浏览器都实现了这些es6的规范，为了兼容考虑，我们都会使用babel将其转回ES5，记住，因为babel只会转译语法糖和一部分实现，像新的类（Promise）还是需要使用polyfill来进行实现的。

### 跨域
跨域的详细介绍可以参考[ruanyifeng的博客](http://www.ruanyifeng.com/blog/2016/04/cors.html)
简单来说，端口，域名，子域名，只要有一点不一样，浏览器就会自动帮我们把请求返回的数据给拦截，所以开发过程中收不到后端小伙伴给的数据也请不要着急，开发中我们可以使用webpack的dev-server的[proxy功能](https://blog.csdn.net/imkxrc/article/details/80648371)，正式版用nginx代理api和前端到同一个域名，当然直接上[cors](https://www.jianshu.com/p/f9c21da2c661)进行跨域也是可以的，不过这个主要还是后端的工作啦，而且记住，options请求也让后端处理一下

