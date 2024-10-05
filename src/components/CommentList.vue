<template>
  <Comment v-for="(item,index) in comments" :comment="item" :key="index"></Comment>
</template>
<script setup>
import Comment from "./Comment.vue";

const comments = defineModel()
</script>
<style scoped lang="scss">
</style>