

## 1 根据公众号生成地址
http://www.gzhshoulu.wang/

## 2 feed43 生成 rss 源

公众号匹配规则

```
<div class='list_main'>{*}
<div class="infomation">{*}
<span class="act_p">{*}
<img src="{%}" alt={%}>{*}
</span>{*}

<a href="{%}" target="_blank">{*}
{%} </a>{*}
<p class="in_digs">{%}</p>{*}
<p class='pubtimes'>{%}</p>{*}
</div> {*}
</div>

{*}

<p class="in_digs">{%}</p>
{*}
<p class='pubtimes'>{%}</p>
```

内容定制

```js

<div>
  <img src="{%1}" style="width:100px; float: left; margin-right: 20px " />
   {%5}
  <div  style="clear:both"> </div>
</div>
<div style="text-align: right; margin-top: 20px"> {%8} </div>


```
