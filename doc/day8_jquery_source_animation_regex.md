This page introduce jquery source sealing, as jquery source code write animation framework . at last relate regex .

## jquery 源码介绍

jquery 通过对外暴露$对象获取, 自定义伪数组元素集合或单个元素(之所以使用伪数组，为了更好对其扩展，例如 使其 获取到的元素对象身上，具备很多遍历方法, $.fn.each )

## 伪数组定义

- length 长度为 0
- length 长度不为 0，且 length -1 上有有效值

```js
if(query.nodeName){
  doms = [query];
} else if(query instanceof Array ||
  typeof query == 'object'
  // 不随手写的数组，都会满足  Length > 0 情况下，最后一个值有有效值(如 nodeList...)
  // 数组为 可能为间断性数组 完整数组 length - 1 键处都会有有效地值
  && query.length > 0 && (query.length - 1) in query){
  doms = query;
} else {
  doms = document.querySelectorAll(query);
}
```

说法2
- 伪数组是一个含有length属性的json对象，
- 它是按照索引的方式存储数据，
- 它并不具有数组的一些方法，只能能通过Array.prototype.slice转换为真正的数组，并且带有length属性的对象。

常见的伪数组对象如下
arguments
NodeList、HTMLCollection
jQuery对象

### 为什么会有伪数组
在日常开发中，有许多的对象是由伪数组组成，比如函数内arguments对象，还有像调用getElementsByTagName,document.childNodes之类的，它们都返回NodeList对象都属于伪数组.

### 为什么使用Array.prototype.slice.call()方法可以将伪数组转化数组
其实我们也可以通过[].slice.call这种形式实现同样的效果，但是通过prototype的形式执行程序效率更高，同样代码也更加优美。 这个是V8引擎中Array.js对slice方发的实现过程

```js
function slice(obj) {
    var arr =[];
    var len = obj.length; // length 正好对应伪数组中的length属性
    for(var i = 0;i < len;i++){
        arr.push[i] = obj[i]; // i 正好对应伪数组中的索引值
    }
    return arr;
}
```

### 鸭子模型
动态语言中与一句话，"如果它走起来像鸭子，而且叫起来像鸭子，那么它就是鸭子"

例如
array 的某些方法，可以让 arguments 对象调用 | 把 argument 当成鸭子
```js
let args = Array.prototype.sclice.call(arguments)
```

自己模仿鸭子
```js
var arr = Array.prototype.slice.apply({ 0: 1, 1: 2, 2: 3, length: 3 });
console.log(arr);
```

鸭子模型模仿
如下 因为 鸡几倍 duckSinging 方法被识别为了鸭子，动态语言中常常具备这种特征
```js
var duck = {  //鸭子对象
        duckSinging: function(){
            console.log( '嘎嘎嘎' );
        }
    };

    var chicken = {  //鸡对象
        duckSinging: function(){
            console.log( '嘎嘎嘎' );
        }
    };

    var choir = []; // 合唱团
    var joinChoir = function( animal ){ //实例化动物对象
        if ( animal && typeof animal.duckSinging === 'function' ){
       //稍作检测，只要有唱歌的方法就可以用。
            choir.push( animal );
            console.log( '恭喜加入合唱团' );
            console.log( '合唱团已有成员数量:' + choir.length );
        }
    };

    joinChoir( duck ); // 恭喜加入合唱团
    joinChoir( chicken ); // 恭喜加入合唱团
```

## 类数组定义

- 具有length || 具有push\unshift\pop\shift中任意一个并调用(最终结果就是生成length这个属性)
- 具有名为splice的方法

https://segmentfault.com/a/1190000011800427


## 正则表达式
由普通字符和元字符组成的模式，用来匹配文本，或检测文本模式
普通字符, 如 a b c

元字符 . * [] () \r \n \f \t \v ？

### 创建
- 直接量  | 推荐速度快
```js
var r = /a/ + 修饰符(g|i|m)
var r = /a/g
```
- 构造函数
```js
// 参数
var r = new RegExp('a', {修饰符})
```

### 元字符
- \d 匹配数字  反义词 \D 匹配非数字
- . 匹配单个字符
- \w 匹配单词(数字 字母 下划线) \W 匹配非单词
- \s 匹配不可见字符 如 换行符等  \S 匹配可见字符
- \b 匹配单词之间的空格， 单词分解, 边界符号  \B  | a,b,c 属于单词边界
- \r 回车 \n 换行 \v \t 制表符号

* 空格 tab 为非可见字符 用 \s 可以匹配到

### 范围匹配
- [abc] 匹配 a 或 b 或 c, 如果要匹配 abc 的话 (abc)

### 量词
指定匹配的个数

- \* 0 个 或 多个 0 - 无穷
- \+ 1 1个 或 多个
- {x, y} 匹配 至少 x 个 最多 y个
- {x} 就匹配 x 个
- {x, } 最少x个
- {, y} 最多y个

### 分组
- ()来分组 还可以表示为 把一个单词标记成一个整体来匹配
- (?:abc) 只匹配 abc 不会有分组结果

### 正则表达式的方法
```js
// 1
test('string') // 这个字符串是符合 前边正则 test， 返回 true | false
//2
exec('string') // 将匹配结果返回一个数组
```

### 使用
```js
var str = 'abckd'
var r1 = /a/
console.log(r1.test(str)) // true

var ret = r1.exec(str)

// 想通过正则表达式 全局匹配 匹配到所有结果的话 需要用循环
var r2 = /a/g
var str = 'abcabcabc'
 while(ret=r2.exec(str)){
  console.log(ret)  // res array
}

```



### 修饰符
- g - global 全局匹配
- i - ignore 匹配的时候忽略大小写
- m - multiline 多行匹配



```


## 模仿 jquery 动画封装

### 代码摘取
```js
// 使用
var init = select.prototype.init = function () {// ....}
// 为对象添加扩展方法
select.fn.extend({})

// 在 jquery 中添加全局扩展方式为
jQuery.extend({method: function (){}}) //

jQuery.fn.test = function(){
    alert("这是jQuery对象方法!");
}
jQuery("div").click(function(){
    $(this).test();   //在当前的jQuery对象上调用test()方法
});

```

https://codepen.io/googleliyang/pen/wxGXKM


代码地址：

https://github.com/googleliyang/kaikeba/tree/master/day8_jquery_source_animation_regex



## FAQ
- js 动画抖动往往是因为动画频率和电脑频率不一致
