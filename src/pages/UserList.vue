<template>
    <div class="UL-container" v-loading="isLoading" v-if="userList.length">
        <UserItem v-for="(item,index) in userList" :userInfo="item" :key="index">{{item}}</UserItem>
    </div>
</template>
<script setup>
import UserItem from '../components/UserItem.vue';
import {SearchUsersByNickname} from "../http/api/search.js";
import {useRoute} from "vue-router";
import {ref,onMounted,watch} from 'vue'

const isLoading=ref(false);
const userList=ref([])
const route=useRoute()

watch(()=>route.query['keyword'],async () => {
  await UserListInit()
})

async function UserListInit() {
  isLoading.value = true
  userList.value = (await SearchUsersByNickname({
    nickname: route.query['keyword'],
  })).data
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