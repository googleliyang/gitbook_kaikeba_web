### show file size
```sh
du -sh ./*
```

## curl

- \- O 把输出写到该文件中，保留远程文件的文件名

- \-L 跟随链接重定向

```js
如果直接使用 curl 打开某些被重定向后的链接，这种情况下就无法获取我们想要的网页内容。例如：
curl http://codebelief.com
会得到如下提示：

<html>
<head><title>301 Moved Permanently</title></head>
<body bgcolor="white">
<center><h1>301 Moved Permanently</h1></center>
<hr><center>nginx/1.10.3</center>
</body>
</html>

```

## zip

- zip -r {outputname}.zip {sourceFile} // if no -r just compress sourcefolder

- unzip -d {folder}
