<script>
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
              昵称：<input type="text" v-model="formData.nickname" required placeholder="请输入昵称">
              <span class="tips" style="position:absolute">昵称违反规范</span>
            </label>
            <label>
              账号：<input type="text" v-model="formData.username" required placeholder="请输入账号">
              <span class="tips" style="position:absolute">账号已存在</span>
            </label>
            <label>
              密码：<input type="password" v-model="formData.password" required placeholder="请输入密码" autocomplete="off">
            </label>
            <label>
              密码：<input type="password" v-model="formData.rePassword" required placeholder="请重复密码" autocomplete="off">
              <span class="tips" style="position:absolute">请保证输入密码一致</span>
            </label>
            <label>
            邮箱：<input type="email" v-model="formData.email" required placeholder="请填入邮箱">
            <button
                v-if="!countdown"
                class="send-btn"
                style="position:absolute"
                type="button"
                @click="sendCode"
            >获取验证码</button>
            <button
                v-else
                class="send-btn"
                style="position:absolute"
                type="button"
            >{{countdown}}</button>
          </label>
          <label>
            验证码：<input type="text" v-model="formData.verifyCode" required placeholder="请填入验证码">
          </label>
            <button @click="submitInfo">注册</button>
        </form>
    </div>
</template>
<script setup>
import{ref } from 'vue'

const countdown=ref(0)
const timer=ref()
const formData=ref({
  nickname:"",
  username:"",
  password:"",
  rePassword:"",
  email:"",
  verifyCode:"",
})

const sendCode=()=>{
  countdown.value=60
  timer.value=setInterval(()=>{
    countdown.value--
    if(countdown.value===0)clearInterval(timer.value)
  },1000)
}
const submitInfo=()=>{
  console.log(formData.value)
}
</script>
<style>
.Rg-container{
    margin: 0 23px;
    height: auto;
    border-radius: 20px;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

  .title-bg{
    height: 100px;
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
      text-shadow: 0 0 10px black;
    }
  }

  form{
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 30px;

    .send-btn{
      height: 100%;
      width:25%;
      font-size: 14px;
      font-weight: bold;
      border:2px solid white;

      &:hover{
        background-color: #CFD3DC;
      }
    }

    label{
      position: relative;

      .tips{
        font-size: 13px;
        font-weight: bold;
        margin-left: 15px;
        line-height: 40px;
        color: red;
        min-width: 150px;
      }
    }

    input{
      border: 0;
      height: 40px;
      font-size: 25px;
      outline: none;
      padding: 0 3px;
      background-color: transparent;
      border-bottom: 2px solid black;
      vertical-align: bottom;

      &::-webkit-input-placeholder{
        color: gray;
        font-size: 20px;
      }
    }

    >button{
      width: 100%;
      height: 50px;
      font-size: 30px;
      background-color: black;
      color: white;
      margin:10px 0;
    }
  }
}
</style>