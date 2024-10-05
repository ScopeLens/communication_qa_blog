<template>
    <div class="Login-container">
        <div class="title-bg">
            <h2 class="title">欢迎来到LensPark</h2>
        </div>
        <form v-loading="isLoading">
            <label>
                账号：<input type="text" v-model="formInfo.username" required placeholder="请输入账号">
            </label>
            <label>
                密码：<input type="password" v-model="formInfo.password" required placeholder="请输入密码" autocomplete="off">
            </label>
            <button @click="submitInfo">登录</button>
            <div class="button-nav">
                <router-link to="">忘记密码</router-link>
                <router-link to="/register">注册账号</router-link>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CookieTool from '../utils/cookie.js';
import { useRouter } from 'vue-router';
import {noAuthLogin} from "../http/api/noAuthApi.js";
import {useAuthStore} from "../stores/authStore";

const isLoading=ref(false)
const dialogVisible=ref(false);
const router=useRouter();
const useAuth=useAuthStore()
const formInfo=ref({
  username:"",
  password:"",
})
const submitInfo=async ()=>{
  if(formInfo.value.password===""||formInfo.value.username==="")return
  isLoading.value=true
  const res=(await noAuthLogin({
    "username":formInfo.value.username,
    "password":formInfo.value.password
  })).data
  useAuth.login(res)
  isLoading.value=false
  await router.push("/home")
}
</script>
<style scoped lang="scss">
.Login-container{
    margin: 0 23px;
    height: 400px;
    border-radius: 20px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  form{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;

    >button{
      width: 100%;
      height: 50px;
      font-size: 30px;
      background-color: black;
      color: white;
    }

    input{
      border: 0;
      height: 40px;
      font-size: 25px;
      outline: none;
      padding: 0px 3px;
      background-color: transparent;
      border-bottom: 2px solid black;
      vertical-align: bottom;

      &::-webkit-input-placeholder{
        color: gray;
        font-size: 20px;
      }
    }
  }

  .title-bg{
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

    .title{
      font-size: 40px;
      font-weight: bold;
      color: white;
      text-shadow: 0px 0px 10px black;
    }
  }
}
.button-nav{
    width: 105%;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    align-items: center;

  a{
    text-decoration: none;
  }
}
</style>