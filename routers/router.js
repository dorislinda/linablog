const Router = require('koa-router');

const router = new Router;

router.get("/", async ctx => {
    //需要title属性
    await ctx.render("index",{
        title: "假装这是一个正经的title"
    })
});

//正则
router.get(/^\/user\/(reg|login)/,async ctx =>{
    const show = /reg/.test(ctx.path);
    await ctx.render("register", {
        show
    })
});

//主要用来处理 用户登录 用户注册 用户退出
router.get("/user/:id", async ctx => {
    ctx.body = ctx.params.id;
});




module.exports = router;