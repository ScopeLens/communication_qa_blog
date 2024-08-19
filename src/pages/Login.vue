<script lang="ts">
    export default {
        name:""
    }
</script>
<template>
    <div class="Login-container">
        <div class="title-bg">
            <h2 class="title">欢迎来到LensPark</h2>
        </div>
        <form action="#">
            <label>
                账号：<input type="text" ref="username" required placeholder="请输入账号">
            </label>
            <label>
                密码：<input type="password" ref="password" required placeholder="请输入密码" autocomplete="off">
            </label>
            <button @click="submitInfo">登录</button>
            <div class="button-nav">
                <router-link to="">忘记密码</router-link>
                <router-link to="/register">注册账号</router-link>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import CookieTool from '../utils/cookie';
import { useRoute, useRouter } from 'vue-router';

    const router=useRouter();
    const route=useRoute();
    console.log(route)
    let username=ref();
    let password=ref();
    function submitInfo(){
        let UNtext=username.value.value;
        let PWtext=password.value.value;
        if(UNtext===""||PWtext==="")return;
        CookieTool.setCookie("username",UNtext);
        CookieTool.setCookie("password",PWtext);
        CookieTool.setCookie("isLogin",true); 
        router.replace("/home");
    }
</script>
<style scoped>
.Login-container{
    margin: 0px 23px;
    height: 400px;
    border-radius: 20px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.Login-container .title-bg{
    height: 30%;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-image: url("../assets/imgs/default-cover.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Login-container .title-bg .title{
    font-size: 40px;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 10px black;
}
.Login-container form{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;
}
.Login-container form input{
    border: 0;
    height: 40px;
    font-size: 25px;
    outline: none;
    padding: 0px 3px;
    background-color: transparent;
    border-bottom: 2px solid black;
    vertical-align: bottom;
}
.Login-container form input::-webkit-input-placeholder{
    color: gray;
    font-size: 20px;
}
.Login-container form>button{
    width: 100%;
    height: 50px;
    font-size: 30px;
    background-color: black;
    color: white;
}
.button-nav{
    width: 105%;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;
}
.button-nav a{
    text-decoration: none;
}
</style>