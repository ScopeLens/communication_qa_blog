// 引入创建函数
import { createRouter, createWebHashHistory } from "vue-router";
import CookieTool from "../utils/cookie";

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: '/home',
            component: () => import("../pages/Home.vue")
        },
        {
            path: '/personalhome',
            component: () => import("../pages/PersonalHome.vue"),
        },
        {
            path: '/mymessage',
            component: () => import("../pages/UserMessage.vue")
        },
        {
            path: '/mystar',
            component: () => import("../pages/UserStar.vue")
        },
        {
            path: '/mywebhistory',
            component: () => import("../pages/Userbhistory.vue")
        },
        {
            path: '/userlist',
            component: () => import("../pages/UserList.vue")
        },
        {
            path: '/ranklist',
            component: () => import("../pages/RankList.vue")
        },
        {
            path: '/post',
            component: () => import("../pages/Post.vue"),
        },
        {
            path: '/editpost',
            component: () => import("../pages/EditPost.vue")
        },
        {
            path: '/login',
            component: () => import("../pages/Login.vue")
        },
        {
            path: '/register',
            component: () => import("../pages/Register.vue")
        }
    ]
})

router.beforeEach((to, from, next) => {
    if ((to.path.includes("/my") ||
        to.path.includes("edit") ||
        to.path.includes("personalhome")
    ) && (!CookieTool.getCookie("isLogin"))) next('/login');
    next()
})

export default router;