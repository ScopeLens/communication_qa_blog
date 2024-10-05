<template>
  <div v-loading="isLoading">
    <PostList :postList="postList"></PostList>
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import {onMounted, ref} from 'vue'
import {ShowView} from "../http/api/personalInfo.js";

const postList=ref([])
const isLoading=ref(false);

async function postInit() {
  postList.value = (await ShowView()).data
}

onMounted(()=>{
  isLoading.value=true
  postInit()
  isLoading.value=false
})
</script>
<style>

</style>