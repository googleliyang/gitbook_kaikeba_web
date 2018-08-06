# 移动端适配

## 宽高比容器

[https://codepen.io/googleliyang/pen/KBWBvM](https://codepen.io/googleliyang/pen/KBWBvM)

```markup
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        * {  
            margin: 0;
            padding: 0;
        }
        main::before {
            content: '';
            display: block;
            width: 1px;
            margin-left: -1px;
            height: 0;
            /*这个30% 是相对于谁?*/
            /*定义基于父元素宽度的百分比上内边距。此值不会如预期的那样工作于所有的浏览器中。 */
            /*188: 246*/
            padding-top: 130.85106382978725%;
        }
        main {
            position: relative;
        }
        .content{
            position: absolute;
            background: red;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
        }
</style>
</head>
<body>
<main>
    <section class="content">
        我是 188:246 的容器哦dding-top, 在 188宽度下 高度为 246px, 并按照此比例缩放 | postcss-aspect-ratio-mini 做的事情为 将 {width} - {height} 转换为对应的
    </section>
</main>
</body>
</html>
```

## REFER

[https://mobilesite.github.io/2018/02/05/vm-mobile-layout/](https://mobilesite.github.io/2018/02/05/vm-mobile-layout/)

