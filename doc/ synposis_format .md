For introduce Api Docuemention read . 



![](/Users/ly/Programmer/kaikeba/doc/imgs/other/fill_path.png)



## # 如上 如何只传 father, antiAlias 参数



# ? [, 123[[]] 这种如何看？



## 

## Example 



```js
fillPath
([fillColor]
[, mode]
[, opacity]
[, preserveTransparency] [, feather]
[, wholePath] [, antiAlias])
```



# ? 全可选怎么只传第二个参数, 是这种要么是个参数对象支持，要么按顺序传，要么无所谓哪个 如 console 要么根据参数类型 内部进行判断的(源码)如下



```
fillPath() //Nothing passed
fillPath(#000000,RGB) // Black, in RGB mode
fillPath(#000000,RGB,50) // Black, in RGB mode, half opacity

//Now it gets tricky, this might ALSO be acceptable:
fillPath(#000000,50) // Black, no mode, half opacity  // 这里识别 没有类型 就是根据参数类型判断的

//OR
fillPath(#000000,,50) // Black, no mode, half opacity
```



为什么有括号，我怎么知道我不应该在实现中使用它们？为什么括号中有逗号？我知道从我找到的样本代码应该是什么样的，这是：



```javascript
myPath.fillPath(myNewColor)
```

##  

看到如上文档，难以想象出 如何去 使用这个方法 



有人指出可以如下使用



```javascript
myPath.fillPath(mynewColor, {
    mode: RGB,
    opacity: .5
})
```



但是如何从文档中体现出来的呢?



OK，假设 [] 是可省略参数，但是单看文档 如何看出呢



那么，有什么好的方式可以让我们可以畅快地阅读文档呢 ?



而， api 文档这么写又有什么好处呢, 难道是为了混淆新手吗 ?







##  为什么 Api 文档这么写 



- 写这些文档的人，变成水平通常不错，他们更习惯于如此语法



## 有没有什么文档约束这种写法或告知用户怎么阅读

https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form



括号中的括号只表示第二部分依赖于第一部分，而且本身也是可选的。一些开关可以自己使用，也可以为它们添加一个值。括号开始时逗号将指示可以有多个逗号分隔值。



- 并没有完全统一的约束，但是使用比较广泛的是  [man page synposis format](http://cm.bell-labs.com/cm/cs/who/dmr/manintro.html) 

> 展示一些使用例子

Underlined words are considered literals, and are typed just as they appear.

Square brackets ( [] ) around an argument indicate that the argument is optional.   可选

Ellipses ... are used to show that the previous argument-prototype may be repeated. 表示可以重复前一个原型 

An argument beginning with a minus sign - is often taken to mean some sort of flag argument even if it appears in a position where a file name could appear.以减号开头的参数 - 通常用于表示某种标志参数



- 可选[]中的逗号表示如果除了其他参数之外还使用此参数



 [Python](http://docs.python.org/3.3/library/functions.html), [man pages](http://linux.die.net/man/1/ls), javascript libs ([Highcharts](http://api.highcharts.com/highcharts#Chart)), etc. 手册都遵循以上约束



> 使用例子

```
fillPath() //Nothing passed
fillPath(#000000,RGB) // Black, in RGB mode
fillPath(#000000,RGB,50) // Black, in RGB mode, half opacity

//Now it gets tricky, this might ALSO be acceptable:
fillPath(#000000,50) // Black, no mode, half opacity

//OR
fillPath(#000000,,50) // Black, no mode, half opacity
```



## 扩展巴科斯-瑙尔范式



可以省略或重复的表达式可以通过花括号 { ... } 表示:，必须出现一次



在这种情况下，字符串 *1*, *2*, ...,*10*,...,*12345*,... 都是正确的表达式。要表示这种情况，于花括号内设立的所有东西可以重复任何次，包括根本不出现。

可选项可以通过方括号 [ ... ] 表示



# ? 什么时候 传一个 {}

### new Console(stdout[, stderr][, ignoreErrors])[#](http://nodejs.cn/api/console.html#console_new_console_stdout_stderr_ignoreerrors)

### new Console(options)



如上文档中会有一个 options 参数， 文档中写出了 option 含有什么

`options` [](http://nodejs.cn/s/_moz/Reference/Global_Objects/Object)

- `stdout` [](http://nodejs.cn/api/stream.html#stream_class_stream_writable)
- `stderr` [](http://nodejs.cn/api/stream.html#stream_class_stream_writable)
- `ignoreErrors` [](http://nodejs.cn/s/_moz/Data_structures#Boolean_type) 是否在向输出流写数据时忽略错误， **默认为** `true`.
- `colorMode` [](http://nodejs.cn/s/_moz/Data_structures#Boolean_type) | [](http://nodejs.cn/s/_moz/Data_structures#String_type) 配置该 `Console` 实例的颜色支持。 设为 `true` 将会使控制台在检查数据时为其上色，设为 `auto` 会使是否启用颜色取决于 `isTTY` 属性的值和对应的数据流的 `getColorDepth()` 返回的值。**默认为** `auto`。

也可以直接传



# ? console.dirxml(...data) 对比 console.dirxml([...data])



# ? console.debug(data[, ...args]) 对比 console.debug([data][, ...args]) 第二个又不能跳过第一个参数



名义上要求必须传

当第一个参数和第二个参数 类型区别时 则不可以，必须有第一个参数的类型

## fs.createReadStream(path[, options])



？？ 说白了 就是第一个参数可选 怎么知道 第二个参数传了的时候有没有传第一个参数 ？？？

这种情况基本都可以，只是区分了一个参数 定义上

### console.timeLog([label][, ...data])

可以看出第一个参数 必须， 而是直接第二个参数是 任意类型

console.timelog('tem') 则会出错，此时需要第一个参数必需传，而 [arg1][, arg2] 你怎么穿都会出错(arg1][,arg2]) 



# ? 为什么不是以一个对象直接传入呢 ?

## Tip 

大多数文档的顶部都应该有一个解释，解释其中使用的约定。



##  console.log([])



## console.error([data][ ...arguments])



console.error()   // no pass

console.error(1,2,3, 4)







## console.log(name[, args])





## console.log(arg1, arg2, arg3)



## console.log([...data])



### console.group([...label])



console.log(1, 2)



## fs.appendFile(path, data[, options], callback)



> 省略 options 

```js
fs.appendFile('message.txt', 'data to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```



如果 `options` 是一个字符串，则它指定了字符编码。例如： 

```js
fs.appendFile('message.txt', 'data to append', 'utf8', callback);
```



>  带有 options

```js
fs.appendFile('message.txt', 'data to append', {encoding: 'utf8', mode: 0o666}, callback);
```

