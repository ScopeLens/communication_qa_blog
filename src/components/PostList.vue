<template>
    <div class="container">
        <PostItem v-for="item in postList" :key="item.id" :data="item"></PostItem>
    </div>
</template>
<script setup>
import PostItem from './PostItem.vue';
    defineProps(['postList'])
</script>
<style scoped lang="scss">
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>