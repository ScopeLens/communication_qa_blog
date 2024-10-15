<template>
  <div v-loading="isLoading">
    <PostList :postList="postList"></PostList>
  </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import {onMounted, ref, watch} from 'vue'
import {SearchPostsByTitle} from "../http/api/search.js";
import {useRoute} from "vue-router";

const route=useRoute()
const postList=ref([])
const isLoading=ref(false);

watch(()=>route.query['keyword'],async () => {
  await postInit()
})


async function postInit() {
  isLoading.value = true
  postList.value = (await SearchPostsByTitle({
    title: route.query['keyword'],
  })).data
  isLoading.value = false
}

onMounted(()=>{
  postInit()
})
</script>
<style>

</style>