This class for node fs, stream, event module.

## Http

> Post 请求需要调用 end 方法

- http.Agent Class Agent 负责为 HTTP 客户端管理连接的持续与复用

当 socket 触发 'close' 事件或 'agentRemove' 事件时，它会被移出代理。 当打算长时间保持打开一个 HTTP 请求且不想它留在代理中，则可以如下处理：

```js

http.get(options, (res) => {
  // 处理事情
}).on('socket', (socket) => {
  socket.emit('agentRemove');
});

```

代理也可被用于单独的请求。 使用 {agent: false} 作为 http.get() 函数或 http.request() 函数的选项，则会为客户端连接创建一个默认配置的一次性使用的 Agent。

```js
http.get({
  hostname: 'localhost',
  port: 80,
  path: '/',
  agent: false  // 创建一个新的代理，只用于本次请求
}, (res) => {
  // 对响应进行处理
});
```

## Fs

> 同步函数方法名中带哟  sync

> 当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。



所有的文件系统操作都有异步和同步两种形式。

异步形式的最后一个参数都是完成时回调函数。 传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 如果操作成功完成，则第一个参数会是 null 或 und

```js
const fs = require('fs');

fs.unlink('/tmp/hello', (err) => {
  if (err) throw err;
  console.log('成功删除 /tmp/hello');
});

const fs = require('fs');
// 当使用同步操作时，任何异常都会被立即抛出，可以使用 try/catch 来处理异常，或让异常向上冒泡。
try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}
```

## Event 

大多数 Node.js 核心 API 都采用惯用的异步事件驱动架构，其中某些类型的对象（触发器）会周期性地触发命名事件来调用函数对象（监听器）。

- 自定义事件 实现方式

1. 直接定义
```js
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// 打印: 1
myEmitter.emit('event');
// 打印: 2
```

2. 继承方式
```js

/*
在自定义事件中，要使用this的话，那么就不能使用箭头函数作为事件的处理程序；
  如果使用了箭头函数，那么此时this就是module.exports对象。
当然如果想要使用this（自定义事件对象）就必须使用function来定义的函数作为事件处理程序。
 */
class MyEvent extends EventEmitter {
  constructor(name){
    super() // 如果使用了constructor，那么必须先初始化父类
    this.name = name
  }
}

let myEvent = new MyEvent('jerry')

// myEvent.on('bb', function(val){
//   console.log(this) // this => myEvent
//   console.log(this.name) // jerry
// })

myEvent.on('bb', val => {
  console.log(this === module.exports)
})

myEvent.emit('bb', 10)

```

> 事件驱动 & 自定义事件 好处

部分设计上的原因，再加上写法上不同，便于低耦合，更好的代码组织. 符合业务需求时，再去执行


## 异常

### 同步捕获

> JavaScript 的 throw 机制的任何使用都会引起异常，异常必须使用 try / catch 处理，否则 Node.js 进程会立即退出。

> 除了少数例外，同步的 API（任何不接受 callback 函数的阻塞方法，例如 fs.readFileSync）会使用 throw 报告错误。


> 在使用 同步模块时，要进行异常捕获

### 异步处理

> Node.js API 中有一小部分普通的异步方法仍可能使用 throw 机制抛出异常，且必须使用 try / catch 处理。 这些方法并没有一个完整的列表；请参阅各个方法的文档以确定所需的合适的错误处理机制。



```js
const fs = require('fs');
fs.readFile('一个不存在的文件', (err, data) => {
  if (err) {
    console.error('读取文件出错！', err);
    return;
  }
  // 否则处理数据
});

```


## Dns

- dns 操作的工具类

## crypto

crypto 模块提供了加密功能，包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

## stream zlib 压缩

```js
const fs = require('fs')
const zlib = require('zlib')

// let rs = fs.createReadStream('./log.txt')
// let wr = fs.createWriteStream('./log.txt.tar')
// let gzip = zlib.createGzip();

// rs.pipe(gzip).pipe(wr)

let gunzip = zlib.createGunzip();
let rs = fs.createReadStream('./log.txt.tt')
let ws = fs.createWriteStream('./log1.txt')

rs.pipe(gunzip).pipe(ws)
```


## global

global - 全局变量

- Buffer 类
- __dirname
- __filename
- clearImmediate(immediateObject)
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)
- console
- exports
- global
- module
- process
- require()
- setImmediate(callback[, ...args])
- setInterval(callback, delay[, ...args])
- setTimeout(callback, delay[, ...args])
- URL
- URLSearchParams


> Modal

在每个模块中，module 的自由变量是一个指向表示当前模块的对象的引用。 为了方便，module.exports 也可以通过全局模块的 exports 对象访问。**module 实际上不是全局的，而是每个模块本地的**。

## Net
net 模块提供了创建基于流的 TCP 或 IPC 服务器(net.createServer())和客户端(net.createConnection()) 的异步网络 API。

## OS
os 模块提供了一些操作系统相关的实用方法。可以这么引用它:
```js
const os = requre('os')
```

## Process

> process 对象是 EventEmitter 的实例。

process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()。


## Repl

repl 模块提供了一种“读取-求值-输出”循环（REPL）的实现，它可作为一个独立的程序或嵌入到其他应用中。

- node repl 下 键入 .editor 可以进行代码的持续输入

```bash

> .editor
// 进入编辑模式（^D 完成，^C 取消）
function welcome(name) {
  return `你好 ${name}！`;
}

welcome('Node.js 用户');

// ^D
'你好 Node.js 用户！'
>

```

## stream

流（stream）是一种在 Node.js 中处理流式数据的抽象接口。 stream 模块提供了一些基础的 API，用于构建实现了流接口的对象。

> Node.js 提供了多种流对象。 例如，发送到 HTTP 服务器的请求和 process.stdout 都是流的实例。

> 流可以是可读的、可写的、或是可读写的。 所有的流都是 EventEmitter 的实例。

### 缓冲

可写流和可读流都会在一个内部的缓冲器中存储数据，可以分别使用的 writable.writableBuffer 或 readable.readableBuffer 来获取。

## string_decoder - 字符串解码器

string_decoder 模块提供了一个 API，用于把 Buffer 对象解码成字符串，但会保留编码过的多字节 UTF-8 与 UTF-16 字符。 可以通过以下方式使用：

例子，StringDecoder 类的基本用法：

```js

const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));

```

## timer 定时器


timer 模块暴露了一个全局的 API，用于在某个未来时间段调用调度函数。 因为定时器函数是全局的，所以使用该 API 无需调用 require('timers')。

Node.js 中的计时器函数实现了与 Web 浏览器提供的定时器类似的 API，除了它使用了一个不同的内部实现，它是基于 Node.js 事件循环构建的。

## timeout.unref()

当调用时，活动的 Timeout 对象不要求 Node.js 事件循环保持活动。 如果没有其他活动保持事件循环运行，则进程可能在 Timeout 对象的回调被调用之前退出。 多次调用 timeout.unref() 没有效果。

注意：调用 timeout.unref() 会创建一个内部定时器，它会唤醒 Node.js 的事件循环。 创建太多这类定时器可能会对 Node.js 应用程序的性能产生负面影响。

返回对 Timeout 的一个引用。


## tls (安全传输层)

tls 模块是对安全传输层（TLS）及安全套接层（SSL）协议的实现，建立在OpenSSL的基础上。


## V8
v8 模块暴露了特定于V8版本内置到 Node.js 二进制文件中的API. 通过以下方式使用：

```js
const v8 = require('v8');
```

## VM 虚拟机

vm 模块提供了一系列 API 用于在 V8 虚拟机环境中编译和运行代码。

```js
onst vm = require('vm');

const x = 1;

const sandbox = { x: 2 };
vm.createContext(sandbox); // Contextify the sandbox.

const code = 'x += 40; var y = 17;';
// x and y are global variables in the sandboxed environment.
// Initially, x has the value 2 because that is the value of sandbox.x.
vm.runInContext(code, sandbox);

console.log(sandbox.x); // 42
console.log(sandbox.y); // 17

console.log(x); // 1; y is not defined.
```



## IPC
IPC(Inter-Process Communication)进程间通信，提供了各种进程间通信的方法。在Linux C编程中有几种方法


1. 半双工Unix管道

2. FIFOs(命名管道)

3. 消息队列

4. 信号量

5. 共享内存

6. 网络Socket

## 压缩

## 路由

> 路由需要进行静态文件处理, 如果 html 中请求， ‘./main.js’ 则向服务器取  main.js 文件需要服务器 读取文件并返回, Node 采用 fs 模块

可以使用第三方框架处理路由

## Tip
> Node.js 错误优先

- Node.js 本身 api 很少, 主要是 第三方 module
- Node.js 较多应用场景还是 中间层
- Node.js 在高并发处理上速度优于 Java
- Node.js 不适合 Cpu 密集 的操作
- Js 处理数据能力比较弱, 数据处理 java 较强
- 递归需要先有终止条件
- 由于 Node.js 单线程，请求需要为 异步处理，否则一个 请求 5s 一百并发
- 数据 操作多，cpu 使用频发， 不适合， io 密集适合 ???
- Node.js 单线程 没有锁的概念 速度快
- Blue 阿里 各种语言
- 双 11, 淘宝 展示 io 密集 使用 Node.js 进行处理
- 面试推销自己




## FAQ

- Electron 模块
- 改写 c 脚本
- 算法思考，编程珠玑, 如: 常思猴子分桃，分页从优等
-  https
- 异常由 throw 方法抛出，不捕获将 无法运行后续程序，崩溃
- 视频录制 .1 doc 参数阅读
- 阅读文档以及 代码提示
