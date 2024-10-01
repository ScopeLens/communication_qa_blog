<template>
    <div v-loading="isLoading">
        <PostList :postList="postList"></PostList>
    </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import {onMounted, ref} from 'vue'

const postList=ref([])
const isLoading=ref(false);

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
<style>

</style>