Course due to flight delay . Filled on August 6th, delay 3 day.


## lastday homework .

- use filereader show (just like day1 filereader)
- use formdata upload file

```js

```

```php
echo var_dump($_POST)
echo var_dump($_FILES)
```

移动端使用 filereader 可以，pc 端 使用q jquery fileuploader 保证兼容性

## 继续昨日，添加新的数据后自动进行刷新

- bootstrap table 插件自带 刷新方法

```js
// frame
$('#').bootstrapTable('refresh')
```

- 通过 queryParams 回调函数 设置分页参数 (设计原理)

- bootstrap table 国际化js文件引入

- 事件委派设置删除按钮事件

  按钮在响应数据完成后添加至，bootstrap table 插件， 想在外围设置事件需要使用事件冒泡， 在响应数据处设置事件代码不优雅. todo:? 代码如下

      https://www.jianshu.com/p/847568e6149e


  - 事件委托是通过事件冒泡的原理，利用父级去触发子级的事件。

  - 如下html，如果不用事件委托，将每一个li都去添加click事件监听，非常麻烦。

  - 另外就是如果通过js动态创建的子节点，需要重新绑定事件。

  - 利用事件委托的话，只需要给父级绑定一个事件监听，即可让每个li都绑定上相应的事件。




- data 于按钮中存放 删除 条目 id



插件使用

- 最早 jquery 插件 -> expjs ->　jquery easyui(丑) ->　bootstrap (amazeui 模仿bootstrap)

- 9:05 jquery delegate 事件委派


##　Echarts 数据报表统计



## d3

##　FAQ

- \* 前端请求js 资源出现缓存时， 可以通过， get 增加参数方式, 避免缓存， 如
在编写， table添加完刷新时，更改index.js 未进行刷新，更改 html index.js 引入为 index.js ?　data = {xxx}


--------------------- 1 hour ---------------------
