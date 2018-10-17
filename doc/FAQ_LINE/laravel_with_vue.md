## 之前疑惑于  laravel 本身自带数据渲染 为什么还要使用  vue

参考 why laravel use vue.

https://blog.pusher.com/why-vuejs-laravel/

github 地址

https://github.com/fisayoafolayan/laravel-vue

> 如下文章给出了 很好的解释


- 1 默认注入 vue, 可新建 多个 blade 使用 vue 组件，这样可以使用到 vue 的很多功能

每次php 接收到路由的时候  可以数据，交给 blade, blade 再将数据传递给 vue 组件



- 2 渲染 App.vue 将 任何请求的进入交给 vue

```js

// app.blade.php
<!doctype html>
    <html lang="{{ app()->getLocale() }}">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="csrf-token" content="{{ csrf_token() }}">

            <title>Outlet for SPA</title>

            <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
            <link rel="stylesheet" type="text/css" href="css/app.css">
        </head>
        <body>
            <div id="app">
                <app></app>
            </div>
            <script type="text/javascript" src="js/vueapp.js"></script>
        </body>
    </html>

// php router file

   Route::get('/{any}', function(){
            return view('vueapp');
    })->where('any', '.*');

```


