<template>
    <div class="UI-container">
        <div class="left-avatar">
            <img :src="useAuth.ImgUrl+userInfo['avatar_url']" alt="">
        </div>
        <div class="center-data">
            <span class="username">{{userInfo['nickname']}}</span>
            <div>
              <span>粉丝数：{{userInfo['followers_count']}}</span> | <span>关注数：{{userInfo['following_count']}}</span>
            </div>
        </div>
        <div class="right-nav">
          <button v-if="!isFollowing" @click="follow">关注</button>
          <button v-if="isFollowing" @click="unFollow">取关</button>
        </div>
    </div>
</template>
<script setup>
import {useAuthStore} from "../stores/authStore.js";
import {ref} from 'vue'
import {FollowUser, UnfollowUser} from "../http/api/personalInfo.js";

const isFollowing=ref(false);
const useAuth=useAuthStore()
const props=defineProps(["userInfo"])

const follow=()=>{
  FollowUser({
    follower:useAuth.Username,
    followee:props.userInfo['username']
  }).then(()=>[
    isFollowing.value=true
  ])
}
const unFollow=()=>{
  UnfollowUser({
    follower:useAuth.Username,
    followee:props.userInfo['username']
  }).then(()=>[
    isFollowing.value=false
  ])
}

</script>
<style scoped>
.UI-container{
    width: 95%;
    height: 140px;
    margin: 0 auto 20px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-image: url("../assets/imgs/default-cover.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s;

  &:hover{
    transform: scale(1.03);
  }

  .left-avatar img{
    width: 100px;
    height: 100px;
    margin: 20px;
    object-position: top;
    object-fit: cover;
    border-radius: 20px;
  }

  .center-data{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-grow: 1;

    .username{
      font-size: 20px;
      font-weight: bold;
      text-shadow: 0 0 5px white;
    }
  }

  .right-nav{
    margin-right: 20px;

    button{
      width: 80px;
      height: 40px;
      font-size: 20px;
      border-radius: 10px;
    }
  }
}
</style>