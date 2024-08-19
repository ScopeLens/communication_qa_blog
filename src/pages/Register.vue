<script lang="ts">
    export default {
        name:"Register"
    }
</script>
<template>
    <div class="Rg-container">
        <div class="title-bg">
            <h2 class="title">欢迎来到LensPark</h2>
        </div>
        <form action="#">
            <label>
                昵称：<input type="text" ref="username" required placeholder="请输入昵称">
            </label>
            <label>
                账号：<input type="text" ref="username" required placeholder="请输入账号">
            </label>
            <label>
                密码：<input type="password" ref="password" required placeholder="请输入密码" autocomplete="off">
            </label>
            <label>
                密码：<input type="password" ref="password" required placeholder="请重复密码" autocomplete="off">
            </label>
            <button @click="submitInfo">注册</button>
        </form>
    </div>
</template>
<script setup lang="ts">
    function submitInfo(){
        
    }
</script>
<style>
    .Rg-container{
        margin: 0px 23px;
        height: 400px;
        border-radius: 20px;
        background-color: whitesmoke;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .Rg-container .title-bg{
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
    .Rg-container .title-bg .title{
        font-size: 40px;
        font-weight: bold;
        color: white;
        text-shadow: 0px 0px 10px black;
    }
    .Rg-container form{
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 30px;
    }
    .Rg-container form input{
        border: 0;
        height: 40px;
        font-size: 25px;
        outline: none;
        padding: 0px 3px;
        background-color: transparent;
        border-bottom: 2px solid black;
        vertical-align: bottom;
    }
    .Rg-container form input::-webkit-input-placeholder{
        color: gray;
        font-size: 20px;
    }
    .Rg-container form>button{
        width: 100%;
        height: 50px;
        font-size: 30px;
        background-color: black;
        color: white;
    }
</style>