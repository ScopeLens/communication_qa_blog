<script lang="ts">
    export default {
        name:"PersonalWindow"
    }
</script>
<template>
    <div class="PW-container">
        <div class="user-info">
            <img :src="identity.avatar" alt="头像">
            <span class="nickname">{{identity.nickname}}</span>
            <span class="roles">{{identity.roles}}</span>
        </div>
        <ul>
            <li><router-link to="/personalhome">我的主页</router-link></li>
            <li><router-link to="/personalhome/mypost">我的博客</router-link></li>
            <li><router-link to="/personalhome/mystar">我的收藏</router-link></li>
            <li><router-link to="/personalhome">浏览历史</router-link></li>
            <li @click="logOut"><a>退出登录</a></li>
        </ul>
    </div>
</template>
<script setup lang="ts">
    import { useRouter } from 'vue-router';
import CookieTool from '../utils/cookie';
    const router=useRouter()
    let identity={
        avatar:"https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        nickname:"ScopeLens",
        roles:"管理员"
    }
    function logOut(){
        CookieTool.delCookie("username");
        CookieTool.delCookie("password");
        CookieTool.delCookie("isLogin");
        router.go(0);
    }
</script>
<style>
.PW-container{
    left: 14px;
    top: 105px;
    border: 3px solid black;
    border-radius: 10px;
    width: calc(20% - 20px);
    position: absolute;
    background-image: url("../assets/imgs/avatar-bg.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
}
.user-info{
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.user-info img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.user-info .nickname{
    font-size: 30px;
}
.user-info .roles{
    color: goldenrod;
    font-weight: bold;
}
ul{
    list-style: none;
}
ul li{
    background-color: #dbe2ef82;
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    transition: 0.3s all;
    cursor: pointer;
}
ul li:hover{
    background-color: #dbe2ef;
}
ul li a{
    font-size: 25px;
    color: #112d4e;
    text-decoration: none;
}
</style>