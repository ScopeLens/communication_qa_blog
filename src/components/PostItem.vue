<template>
    <div class="container" @click="toDetail">
        <div class="header">
            <div class="content">
                <h3>{{ data['title'] }}</h3>
                <span>{{ data['content'] }}</span>
            </div>
            <div class="tag">
                <span v-for="(item, index) in data['tags']" :key="index">#{{ item }}</span>
            </div>
        </div>
        <div class="body">
            <img v-for="(item, index) in data['images']" :key="index" :src="useAuth.ImgUrl+item">
        </div>
        <div class="footer">
            <div class="left">
                <span><i class="iconfont icon-kanguo"></i>{{ data['views_count'] }}</span>
                <span><i class="iconfont icon-dianzan"></i>{{ data['likes_count'] }}</span>
                <span><i class="iconfont icon-huifu"></i>{{ data['reply_count'] }}</span>
                <span><i class="iconfont icon-shoucang"></i>{{ data['favorites_count'] }}</span>
            </div>
            <div class="right">
                <span class="author">{{ data['nickname'] }}</span>
                <span class="date">{{ handleDate(data['updated_at']) }} </span>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useRouter } from 'vue-router';
import {useAuthStore} from "../stores/authStore.js";
import {handleDate} from "../utils/date.js";

const useAuth=useAuthStore()
const router=useRouter();
let props=defineProps(["data"]);
function toDetail(){
    router.push({
        path:'/post',
        query:{
            post_id:props.data['post_id']
        }
    })
}
</script>
<style scoped lang="scss">
.container{
  background-color: #dbe2ef;
  border: 2px solid black;
  border-radius: 5px;
  padding:10px;
  margin:0 20px 10px 20px;

  .header{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .body{
    img{
      width: 100px;
      height: 100px;
      margin: 10px;
    }
  }

  .footer{
    display: flex;
    justify-content: space-between;

    .left {
      span{
        margin: 0 5px;
      }
    }

    .right {
      color:gray;

      .author{
        margin-right: 10px;
      }
    }
  }
}
</style>