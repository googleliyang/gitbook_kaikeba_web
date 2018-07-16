Js art skill .


## 方式

### 向下取整 (负数情况表现为向上取整)

```js
// 其实这句话不严谨，JS中number都是64-bit浮点数，相当于Java里的double，所以这个应该算忽略小数点后的数字吧...

由于是Bitwise NOT，所以这个限定范围在signed 32 bit,超出了就归零了吧
// ---- way 1 ----
var a = ~~1.2 // 1
var a = ~~1.7 // 1

// ---- way 2 ----
var a = 1.2 >> 0 // 1
var a = ~~1.7 >> 0 // 1

var a = ~~-1.2 // -1

```

### 设默认值

```js
function foo(bar){
    var foobar = bar || 'default';
    //bar 为 undefined, null, "", 0, false, NaN 时最后都得到'default'
}

//注意以下问题
[]||"aa"; //[]
{}||"aa"; //SyntaxError
({})||"aa";//Object {}

```

### 检测是否为数字

```js
isNaN({})
```

### UNICODE 用作变量名

```js
var \u4f60\u597d = "\u4f60\u597d";
var b = {};
b.\u4f60\u597d = \u4f60\u597d;
console.log(b);//Object {你好: "你好"}
console.log(b.你好);// "你好"
console.log(b.\u4f60\u597d);// "你好"
console.log("你"==="\u4f60");//true
```

### 数组传递和复制  | 数组复制只需要  sclice(0) 即可

```js
var a = [1,2,3];
var b = a;
delete b[1];
console.log(a);//[1, undefined × 1, 3]

var a = [4,5,6];
var b = a.slice(0);
delete b[1];
console.log(a);//[4,5,6]
console.log(b);//[4, undefined × 1,6]
```

### toString | 数字不可以直接 toString，可以使用 2..toString()

```js
2.toString();//SyntaxError
2 .toString(); //"2"
2..toString(); //"2"
(2).toString(); //"2"

[1,[2,"abc","",0,null,undefined,false,NaN],3].toString();
//"1,2,abc,,0,,,false,NaN,3"

```

### 日期转数字
```js
var d = +new Date();
```

### 合并数组

```js
var a = [1,2,3];
var b = [4,5,6];
Array.prototype.push.apply(a, b);
console.log(a); //[1,2,3,4,5,6]
```

### 将值插入数组指定位置

```js
var a = [1,2,3,7,8,9];
var b = [4,5,6];
var insertIndex = 3;
a.splice.apply(a, Array.concat(insertIndex, 0, b));
```

### | & || &&
```js
var a = b && 1;
//相当于:
if (b) {
  a = 1;
}else {
  a = b;
}

var a = b || 1;
//相当于
if (b) {
  a = b;
} else {
  a = 1;
}
```

### 类型判断

```js
Object.prototype.toString.call([]) === '[object Array]';
```

### js 常用位运算

### js 趋向于
```js
// 就会打印9,8,7,6,5,4,3,2,1,0 了
// ps : 移植一个C++的老段子
var x = 10; while (x --> 0)console.log(x);
```

### string 转数字
``` js
a = +'123'
```

### 生成指定值的数字数组 || 在服务器无值，需要循环列表时

```js
var numbersArray = [] , max = 100;
for( var i=1; numbersArray.push(i++) < max;);
// ||
 for( var i=1, num = []; num.push(i++) < 100;);


```

### 清空数组
```js
arr.length = 0
```

### jsfuck 常见取值
```js
false       =>  ![]
true        =>  !![]
undefined   =>  [][[]]
NaN         =>  +[![]]
0           =>  +[]
1           =>  +!+[]
2           =>  !+[]+!+[]
10          =>  [+!+[]]+[+[]]
Array       =>  []
Number      =>  +[]
String      =>  []+[]
Boolean     =>  ![]
Function    =>  []["filter"]
eval        =>  []["filter"]["constructor"]( CODE )()
window      =>  []["filter"]["constructor"]("return this")()
```

### js 常见位运算
```js

// 判断奇偶
num & 1 && alert('奇数') || alert('偶数')


```

## refer
- js 奇淫技巧
https://www.zhihu.com/question/27428135
- 100 行以内有哪些 给力代码
https://www.zhihu.com/question/26483508/answer/32954811
- 短化代码 零宽空白
http://ucren.com/blog/archives/549
