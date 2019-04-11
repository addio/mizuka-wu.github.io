# RN2Flutter
## Flutter环境安装
fultter需要安装配置环境，主要是dart和flutter，vscode需要安装flutter插件

### dart
```bash
brew tap dart-lang/dart
brew install dart

```
dart 安装完成

### Flutter
使用第三方传入到brew的镜像进行安装

```bash
brew tap MiderWong/flutter
brew install flutter

```

### 其他依赖
设定依赖为国内镜像之后进行自动安装即可  
.zshrc .bash_profile都需要加

```bash
export PUB_HOSTED_URL=https://dart-pub.mirrors.sjtug.sjtu.edu.cn
export FLUTTER_STORAGE_BASE_URL=https://mirrors.sjtug.sjtu.edu.cn
flutter doctor

```

之后按照提示修复即可
ps: cocoa太慢的话看[这个](http://www.cnblogs.com/zhuyanboyue/p/6118950.html)


### 杀进程
```ps aux|grep flutter|awk '{print $2}'|xargs kill -9```

### 各种问题解决
[url](https://adolphor.com/blog/2018/09/09/error-and-solution-in-flutter.html)