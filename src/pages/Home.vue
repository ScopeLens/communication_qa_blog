<template>
  <div class="container" v-loading="isLoading">
    <div class="nav">
      <select v-model="sortType">
        <option value="1">最新发布</option>
        <option value="2">最多点赞</option>
        <option value="3">最多回复</option>
        <option value="4">最多收藏</option>
      </select>
    </div>
    <PostList :postList="postList"></PostList>
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import {onMounted, ref,computed} from 'vue'

const postList=ref([])
const isLoading=ref(false);
const sortType=ref(1)
const sortedPostList=computed(()=>{
  switch (sortType.value){
    case 1:
      break
    case 2:
      break
    case 3:
      break
    case 4:
      break
  }
  console.log(sortType.value)
})

function postInit(){
  isLoading.value=true
  postList.value=[
    {
      id:1,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
    {
      id:2,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
    {
      id:3,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
    {
      id:4,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
    {
      id:5,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
    {
      id:6,
      title:"震惊！！！！！",
      content:"XXXXXXXXXXXXXXXXXXXX",
      tag:['军事','坦克'],
      img:["src"],
      watch:1000,
      like:99,
      reply:100,
      star:1111,
      author:"ScopeLens",
      date:"2024-1-1 10:00"
    },
  ]
  isLoading.value=false
}

onMounted(()=>{
  postInit()
})
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