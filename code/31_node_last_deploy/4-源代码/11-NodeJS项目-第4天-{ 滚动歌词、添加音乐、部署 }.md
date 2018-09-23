#### 处理快进

![1536320346810](./assets\1536320346810.png)

![1536328449851](C:\Users\heima\Desktop\全栈5期\06-NodeJS项目-第6天-{ 滚动歌词、部署 }\4-源代码\assets\1536328449851.png)

### 部署

---



* NodeJs是基于V8解析引擎并执行的，所以不同于其他后端语言，需要先编译后才能在服务器运行
  * __node是解释型的语言，本身就能直接运行__
* NodeJs自身又包含服务器，所以当启动了NodeJs的程序，就会在使用当前机器的公网IP并监听端口运行服务器
  * __包含服务器的node，自己就可以跑__
* __无需单独编译和服务器的支持__



#### PM2

* 管理node项目，让其永不关闭的一个容器

* forever(没有pm2好用)

* 保障服务器不会挂掉

* 1. ```npm i -g pm2```
  2. ``` pm2 start ./xxx.js --name projectname```

* 其他命令

  * ```js
    pm2 examples // 查看常用示例
    pm2 [start||restart||stop||delete] all||name||id // 重启 
    pm2 show name||id // 查看信息
    pm2 list // 查看项目
    pm2 flush // 清空日志
    pm2 log name||id // 查看日志
    ```



#### nginx负载均衡

* 

* 配置1:

  * ```python
    upstream localhost {
        ip_hash; # nginx内置的处理
        server localhost:8000 weight=1;
        server localhost:8001 weight=1;
    }
    #server {.......
    location / {
    	proxy_pass http://localhost;
    }
    ```



#### 查看环境变量

* art-template中有NODE_ENV==="production" 环境变量的配置
* __linux:__ /etc/profile文件中  export 环境变量=值
* 执行坏境变量更新命令  ```source /etc/profile```



#### 有时IP不是固定的

* ip_hash 是解决通过IP地址来分配不同服务器的，对不同服务器以绑定的方式分解压力。
* 同时又能实现登录后，还访问其他服务器导致登录状态不一的解决方案
* 但是其并不是真正的session共享，真正的共享还是在数据库存储



#### redis

* redis数据库以键值对的方式存储数据，并将数据在__内存__中以快照的方式存储，一定时间内批量写入到文件，因此__速度__及性能非常好

* 进入到目录，启动服务器 redis-server
* 安装windows服务 ```./redis-server –service-install ./redis.windows.conf```
* 运行客户端 ```redis-cli```
* 相关命令
  * 获取帮助 ``` help <command>```
  * 查询所有的key  ```keys *```
  * 添加或更新一个数据 ```SET key value [EX seconds] [PX milliseconds] [NX|XX]```
    * ```set test 1 EX 10 NX```
      * 表示插入test:1数据 保存10秒  
        * NX 不存在数据才插入
        * XX 存在数据才插入
  * 获取value ```get key```
  * 删除key ```del key```
  * 插入数组
    * sadd key [...values]
  * 查看数组数据
    * smembers key



#### ioredis

* nodejs中的一个基于promise的redis客户端
* 
