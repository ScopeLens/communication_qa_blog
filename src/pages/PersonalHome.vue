<template>
    <div class="PH-container" v-loading="isLoading">
        <div class="info">
            <img :src="useAuth.AvatarURL" class="bg-img" alt="背景">
            <img :src="useAuth.AvatarURL" class="avatar-img" alt="头像">
            <div class="detail">
                <h2>{{ useAuth.Nickname }}</h2>
                <div class="Ftwo">
                    <span>粉丝数:{{useAuth.FollowersCount}}</span>
                    <span>关注数:{{useAuth.FollowingCount}}</span>
                </div>
<!--                <div class="nav">-->
<!--                    <button>编辑</button>-->
<!--                    <button>上传头像</button>-->
<!--                </div>-->
            </div>
        </div>
        <PostList :postList="postList"></PostList>
    </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import PostList from '../components/PostList.vue';
import {SearchPostsByUsername} from "../http/api/search";
import {useAuthStore} from "../stores/authStore";

const isLoading=ref(false);
const postList=ref([])
const useAuth=useAuthStore()

async function DataInit() {
  isLoading.value = true
  postList.value = (await SearchPostsByUsername({
    username: useAuth.Username
  })).data
  isLoading.value = false
}

onMounted(()=>{
  DataInit();
})
</script>
<style scoped>
.info{
  height: 500px;
  margin: 0 20px 20px;
  border-radius: 10px;
  background-color: white;
  text-align: center;

  .bg-img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    margin: 0 -20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }

  .avatar-img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    transform: translateY(-50%);
    object-fit: cover;
    object-position: center;
  }

  .detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100px);

    .Ftwo{
      width: 180px;
      display: flex;
      justify-content: space-evenly;
    }

    .nav{
      width: 200px;
      margin: 10px;
      display: flex;
      justify-content: space-between;

      button{
        font-size: 15px;
        border: 0;
        background-color: transparent;
        transition: all 0.1s;

        &:hover{
          color: rgb(0, 179, 255);
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>