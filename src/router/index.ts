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
            children: [
                {
                    path: '/editpost',
                    component: () => import("../pages/EditPost.vue")
                }
            ]
        },
        {
            path: '/login',
            component: () => import("../pages/Login.vue")
        },
    ]
})

router.beforeEach((to, from, next) => {
    // if (CookieTool.getCookie("isLogin")) {
    //     next();
    // }
    // else {
    //     router.replace({
    //         path: "/login"
    //     })
    // }
    next()
})

export default router;