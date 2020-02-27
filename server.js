const Koa = require('koa')
const Router = require('koa-router')

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const auth = require('./server/auth')

const RedisSessionStore = require('./server/session-store')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// 创建redis client
const redis = new Redis()

let index = 0

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()
    
    server.keys = ['jokecy develop git up app']
    const SESSION_CONFIG = {
        key: 'jid',
        maxAge:　10 * 1000,
        store: new RedisSessionStore(redis),
    }
    server.use(session(SESSION_CONFIG, server))

    // 配置处理github OAuth 的登录
    auth(server)
    server.use(async (ctx, next) =>{
        /* console.log(ctx.cookies.get('id'))

        // get user date 
        // example: model.getUserById(id)
        ctx.session = ctx.session || {} 
        ctx.session.user = {
            username: 'jokery',
            age: 18
        } */

        /* if (!ctx.session.user) {
            ctx.session.user = {
                name: 'Jokcy',
                age: 18
            }
        } else {
            //console.log('session is: ', ctx.session)
        } */
        //console.log('session is: ', ctx.session)
        await next()
    })
    
    
    router.get('/a/:id', async (ctx)=>{
        const id = ctx.params.id
        /* const parsedUrl = parse(ctx.req.url, true)
        const { query } = parsedUrl
        const params = ctx.params */
        console.log(id)
        //await handle(ctx.req, ctx.res, parsedUrl)
        await handle(ctx.req, ctx.res, {
                pathname:'/a',
                query:{id}
            })
        //await app.render(ctx.req, ctx.res, "/a", { "id": ctx.params.id })
        ctx.respond = false            
    })
    router.get('/api/user/info', async (ctx)=>{
        const user =  ctx.session.userInfo
        if(!user) {
            ctx.status = 401
            ctx.body = 'Need Login'
        } else {
            ctx.body = user
            ctx.set('Content-Type', 'application/json')
        }        
    })
    /* router.get('/set/user', async (ctx)=>{
        ctx.session.user = {
            username: 'jokery',
            age: 18
        }
        ctx.body = 'Set session success'            
    }) 
    router.get('/delete/user', async (ctx)=>{
        ctx.session = null
        ctx.body = 'Delete session success'            
    })  */

    server.use(router.routes())
    
    
    server.use(async (ctx, next) => {
        ctx.cookies.set('id', 'userid: xxxxxx')

        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })
    
    server.listen(3000, ()=>{
        console.log("koa server listening on 3000")
    })

    /* createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        
        if (pathname === '/a') {
            app.render(req, res, '/b', query)
        } else if (pathname === '/b') {
        app.render(req, res, '/a', query)
        } else {
            
            handle(req, res, parsedUrl)
        }
    }).listen(3000, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    }) */
})

/* const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next ({ dev:true })

const handler = app.getRequestHandler()

app.prepare().then(()=>{    
    const server = new Koa()
    const router = new Router()
   
   
    router.get('/a/:id', async (ctx, next)=>{
        const id = ctx.params.id
        console.log(id)
        await handler(ctx.req, ctx.res, {
            pathname:'/a',
            query:{
                id: id
            }
        }),
        ctx.respond = false            
    })
    
    server.use(router.routes())
    
    
    server.use(async (ctx, next) => {
        await handler(ctx.req, ctx.res)
        ctx.respond = false
    })
    
    server.listen(3000, ()=>{
        console.log("koa server listening on 3000")
    })
}) */

//--------------------
//const router = new Router()
        
   /*  router.get('/test/:id', (ctx)=>{
        //ctx.body = `<p>test rqueset ${ctx.params.id}</p>`
        ctx.body = {success: true}
        ctx.set('Content-Type', 'application/json')
    }) */

    /* server.use(async(ctx, next) => {
        await next()
    }) */

    //server.use(async(ctx, next) => {
        /* const path = ctx.path
        const method = ctx.method
        ctx.body = `<span>${method} Koa render ${path}</span>`; */
        //await next()
    //})
    /* server.use(async(ctx, next) => {
        ctx.body = `<span>Koa Render 222</span>`;
    }) */