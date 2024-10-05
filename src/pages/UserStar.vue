<template>
    <div v-loading="isLoading">
        <PostList :postList="postList"></PostList>
    </div>
</template>
<script setup>
import PostList from '../components/PostList.vue';
import {onMounted, ref} from 'vue'
import {ShowFavorite} from "../http/api/personalInfo.js";

const postList=ref([])
const isLoading=ref(false);

async function postInit() {
  postList.value = (await ShowFavorite()).data
}

onMounted(()=>{
  isLoading.value=true
  postInit()
  isLoading.value=false
})
</script>
<style>

</style>