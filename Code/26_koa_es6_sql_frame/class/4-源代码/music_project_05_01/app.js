const Koa = require('koa');

let app = new Koa(); // 创建服务器对象

// 监听端口
app.listen(8888,()=>{
    console.log('服务器启动在8888端口');
});
// art-template
const render = require('koa-art-template');
const path = require('path');

render(app, {
  root: path.join(__dirname, 'views'), // 模板查找路径views
  extname: '.html',
  // 获取环境变量中的NODE_ENV: true : debug 开发
  //    1:  不压缩，不混淆 ，实时更新静态页面
  debug: process.env.NODE_ENV !== 'production', //  压缩，混淆 ，不实时更新静态页面
});

const db = require('./db.js');
app.use(async (ctx,next)=>{

    // 查询数据库  结果是一个数组
    // 1: await 对应 resolve(参数)
    // 2: reject(????)
    try {
      let [ {username} ] = await db.q('select * from users where id = ?',[1]);
    } catch (e) {
      // 对应reject(err)
      console.log(e);
    }
   
    console.log(username);
    // ctx.body = 'haha'; // 响应数据
    await ctx.render('index.html',{
        msg:username
    });
});