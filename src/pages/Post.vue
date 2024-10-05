<template>
    <div class="Post-container" v-loading="isLoading">
        <div class="post-title">
            <h1>{{ post['title'] }}</h1>
          <el-popconfirm
              confirm-button-text="删除"
              cancel-button-text="取消"
              :icon="InfoFilled"
              icon-color="#909399"
              title="确定要删除吗?"
              @confirm="confirmEvent"
          >
            <template #reference>
              <el-icon v-show="isEdit"><DeleteFilled /></el-icon>
            </template>
          </el-popconfirm>
        </div>
        <div class="post-info">
            <div class="user-data">
                <img :src="useAuth.ImgUrl+post['avatar_url']" alt="">
                <span>{{ post['nickname'] }}</span>
            </div>
            <div class="browse-data">
                <span>
                  <el-icon><View/></el-icon>
                  {{ post['views_count'] }}
                </span>
                <span @click="handleLike">
                  <el-icon><Pointer :color="iconStyle[0]"/></el-icon>
                  {{ post['likes_count'] }}
                </span>
                <span>
                  <el-icon><Comment/></el-icon>
                  {{ post['reply_count'] }}
                </span>
                <span @click="handleFavorite">
                  <el-icon><Star :color="iconStyle[1]"/></el-icon>
                  {{post['favorites_count'] }}
                </span>
            </div>
        </div>
        <div class="post-content">
            <div class="content-data">
                {{ post['content'] }}
            </div>
            <div class="content-img">
                <img v-for="(item,index) in post['images']" :src="useAuth.ImgUrl+item" :key="index" alt="">
            </div>
            <div class="content-tag">
                <el-tag :color="colorType[index%5]" v-for="(item, index) in post['tags']" :key="index">{{ item }}</el-tag>
            </div>
        </div>
        <hr>
        <Reply :post_id="post['post_id']"></Reply>
        <div class="comment-list">
            <h2>评论:</h2>
          <CommentList v-model="comments"></CommentList>
        </div>
    </div>
</template>
<script setup>
import { onMounted,ref,computed,onBeforeUnmount } from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Reply from '../components/Reply.vue';
import {CheckPostDetail, DeletePost, GetPostStatus} from "../http/api/post.js";
import {useAuthStore} from "../stores/authStore.js";
import CommentList from "../components/CommentList.vue";
import {
  AddFavoritesCount,
  AddLikesCount,
  AddViewsCount,
  DelFavoritesCount,
  DelLikesCount
} from "../http/api/postInfo.js";
import {Star, View, Comment, Pointer, InfoFilled, DeleteFilled} from "@element-plus/icons-vue";

const route=useRoute();
const isLoading=ref(false);
const useAuth=useAuthStore()
const post=ref({})
const comments=ref([])
const colorType=ref(["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"])
const params=ref({
  "post_id": Number(route.query['post_id']),
})
const postStatus=ref({
  "is_liked":false,
  "is_favorite":false
})
const oldPostStatus=ref({
  "is_liked":false,
  "is_favorite":false
})
const iconStyle=computed(()=>{
  return [
      postStatus.value['is_liked']?"#F56C6C":"rgba(0, 0, 0, 0.5)",
      postStatus.value['is_favorite']?"#F56C6C":"rgba(0, 0, 0, 0.5)",
  ]
})
const isEdit=computed(()=>{
  return post.value['username'] === useAuth.Username;
})
const router=useRouter()

async function postInit() {
  const res= (await CheckPostDetail(params.value)).data
  if(!postStatus.value['is_viewed']){
    await AddViewsCount(params.value)
    post.value['views_count']+=1
  }
  post.value=res['post']
  comments.value=res['comments']
}
const handleLike=()=>{
    postStatus.value['is_liked']=!postStatus.value['is_liked']
  if(postStatus.value['is_liked']){
    post.value['likes_count']+=1
  }else{
    post.value['likes_count']-=1
  }
}
const handleFavorite=()=>{
    postStatus.value['is_favorite']=!postStatus.value['is_favorite']
    if(postStatus.value['is_favorite']){
      post.value['favorites_count']+=1
    }else{
      post.value['favorites_count']-=1
    }
}
const confirmEvent = () => {
  DeletePost(params.value)
  router.go(-1)
}
onMounted(async () => {
  isLoading.value = true;
  postStatus.value = (await GetPostStatus(params.value)).data
  oldPostStatus.value['is_liked'] = postStatus.value['is_liked']
  oldPostStatus.value['is_favorite'] = postStatus.value['is_favorite']
  await postInit()
  isLoading.value = false
})
onBeforeUnmount(async () => {
  if (postStatus.value['is_liked'] !== oldPostStatus.value['is_liked']) {
    switch (postStatus.value['is_liked']) {
      case true:
        await AddLikesCount(params.value)
        break;
      case false:
        await DelLikesCount(params.value)
        break;
    }
  }
  if (postStatus.value['is_favorite'] !== oldPostStatus.value['is_favorite']) {
    switch (postStatus.value['is_favorite']) {
      case true:
        await AddFavoritesCount(params.value)
        break;
      case false:
        await DelFavoritesCount(params.value)
        break;
    }
  }
})
</script>
<style scoped lang="scss">
.Post-container{
    padding: 20px;
  margin: 0 23px 20px;
  border-radius: 10px;
    background-color: white;
}
.post-title{
    font-size: 20px;
    margin: 10px;
  display: flex;
  justify-content: space-between;
}
.post-info{
    display: flex;
    justify-content: space-between;
    align-items: center;

  .user-data{
    display: flex;
    align-items: center;
    margin: 10px;

    img{
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
    }

    span{
      font-size: 20px;
      margin: 10px;
    }
  }

  .browse-data{
    span{
      height: 25px;
      font-size: 22px;
      margin: 0 10px;
      color: #00000080;
      cursor: pointer;

      svg{
        line-height: 25px;
      }
    }
  }
}
.post-content{

  .content-data{
    font-size: 20px;
    color: rgb(35, 31, 31);
    margin-bottom: 20px;
  }

  .content-img img{
    width:100%;
    margin: 0 0 20px;
  }
  .content-tag{
    :deep(.el-tag){
      margin: 0 5px 20px 5px;
      color: white;
    }
  }
}
.comment-list{
    margin: 10px;
}
</style>