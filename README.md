# react-native 

*react-native: 0.31.0*

## 编译并运行
```
react-native run-ios

```
## 工程报错
对于老工程运行在新的Xcode版本上RCTWebSocket报错，如下：
```
Ignoring return value of function declared with 'warn_unused_result' attribute
```
解决：点击RCTWebSocket => TAGETS =>Build Settings => Custom Compiler Flags 去掉 -Werror -Wall两个flags 再运行项目就可以了。

## 编译报错
```
 ERROR  EMFILE: too many open files, watch
{"errno":-24,"syscall":"watch","code":"EMFILE","filename":null}
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:123:28)
```
老版本的react-native需要安装*watchman*，在终端执行：
```
brew install watchman
```
静静等待安装完成

还是报错：


