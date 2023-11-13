//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {
                title: '关于'
            }
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [
                {
                    name: 'xiaoxi',
                    path: 'news',
                    component: News,
                    meta: {
                        isAuth: true,
                        title: '新闻'
                    },
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: '消息',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: { title: '详情' },
                            //props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给Detail组件，缺点是值是死的
                            // props:{id:666,title:'777'}

                            //props的第二种写法，值为布尔值，当为true时，就会把该路由组件接收到的Params参数以props的形式传给Details组件，缺点是只能针对Params形式的参数
                            // props:true

                            //props的第三种写法，值为函数，最强大
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ],
                    meta: {
                        isAuth: true,
                        title: '消息'
                    }
                }
            ]
        }
    ]
})
/* 
//全局前置路由守卫——初始化的时候及每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('前置路由守卫', to, from)
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        }
    } else {
        next()
    }
})*/

//全局后置路由守卫——初始化的时候及每次路由切换之后被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title||'系统'
    
}) 

export default router