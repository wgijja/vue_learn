//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";

import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
    routes: [
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail',
<<<<<<< HEAD
                            component: Detail,
                            //props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给Detail组件，缺点是值是死的
                            // props:{id:666,title:'777'}

                            //props的第二种写法，值为布尔值，当为true时，就会把该路由组件接收到的Params参数以props的形式传给Details组件，缺点是只能针对Params形式的参数
                            // props:true

                            //props的第三种写法，值为函数，最强大
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
=======
                            component: Detail
>>>>>>> 3a9a80a4d84a0ebe3efa7603d4af799b3360fb1e
                        }
                    ]
                }
            ]
        }
    ]
})