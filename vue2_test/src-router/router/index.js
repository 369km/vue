//创建路由器
import VueRouter from 'vue-router'
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";

const router=new VueRouter({
    //mode:'hash',
    mode:'history',
    routes: [
        {
            name:'about',
            path: '/about',
            component: About,
            meta:{title:'关于',isAuth:true}
        },
        {
            name:'home',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name:'news',
                    path: 'news',
                    component: News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'message',
                    path: 'message',
                    component: Message,
                    meta:{isAuth:true,title:'消息'},

                    //独享路由守卫
                    beforeEnter:((to,from,next)=>{
                        if (to.meta.isAuth){
                            if ('root'===localStorage.getItem('role')){
                                next()
                            }else {
                                alert('无权限查看')
                            }
                        }else{
                            next()
                        }
                    }),
                    children:[
                        {
                            name:'detail',
                            //query 方式
                            // path:'detail',
                            //params 方式
                            path:'detail/:id/:title',
                            component:Detail,
                            meta:{title:'详情'},
                            // props:{id:'001',title:'hello'},//props 方式
                            //props:true,//params 的传参以props传递
                            //props($route){return {id:$route.params.id,title:$route.params.title}},
                            props({params:{id,title}}){return {id,title}},
                        }
                    ]
                },
            ]
        },
    ]
})
//全局路由守卫，符合条件的才给路由
//前置路由配置
router.beforeEach((to,from,next)=>{
    if (to.meta.isAuth){
        if ('root'===localStorage.getItem('role')){
            next()
        }else {
            alert('无权限查看')
        }
    }else{
    next()
    }
})
//后置路由配置
router.afterEach((to)=>{
    document.title=to.meta.title
})


export default router;