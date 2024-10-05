<template>
  <div class="container" v-loading="isLoading">
    <div class="nav">
      <select v-model="sortType">
        <option value="1">最新发布</option>
        <option value="2">最多点赞</option>
        <option value="3">最多回复</option>
        <option value="4">最多收藏</option>
        <option value="5">最多人看</option>
      </select>
    </div>
    <PostList :postList="postList"></PostList>
<!--    <el-backtop :right="100" :bottom="100" />-->
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import { ref,watch} from 'vue'
import {GetPostListByType} from "../http/api/post.js";

const postList=ref([])
const isLoading=ref(false);
const sortType=ref(1)
watch(()=>sortType.value,async (newValue) => {
  isLoading.value = true
  postList.value = (await GetPostListByType({'sort_type': newValue})).data
  isLoading.value = false
},{immediate:true})

</script>
<style scoped>
.container{

  .nav{
    z-index: 9999;
    right:calc(20% + 20px);
    top:0;
    position: absolute;
    color: red;
    cursor: pointer;
  }
}
</style>