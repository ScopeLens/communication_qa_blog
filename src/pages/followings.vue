<template>
    <div class="UL-container" v-loading="isLoading" v-if="userList.length">
        <UserItem v-for="(item,index) in userList" :userInfo="item" :key="index">{{item}}</UserItem>
    </div>
</template>
<script setup>
import UserItem from '../components/UserItem.vue';
import {ref,onMounted} from 'vue'
import {GetFollowing} from "../http/api/personalInfo.js";

const isLoading=ref(false);
const userList=ref([])

async function UserListInit() {
  isLoading.value = true
  const res=(await GetFollowing()).data
  if(res)userList.value =res
  else userList.value=[]
  isLoading.value = false
}
onMounted(async () =>{
  await UserListInit()
})
</script>
<style>
.UL-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>