<script lang="ts">
    export default {
        name:"UserItem"
    }
</script>
<template>
    <div class="UI-container">
        <div class="left-avatar">
            <img src="../assets/imgs/avatar.jpg" alt="">
        </div>
        <div class="center-data">
            <span class="username">ScopeLens</span>
            <span class="post-num">发帖数:1000万</span>
        </div>
        <div class="right-nav">
            <button>关注</button>
        </div>
    </div>
</template>
<script setup lang="ts">
    defineProps(["UserInfo"])
</script>
<style scoped>
.UI-container{
    width: 95%;
    height: 140px;
  margin: 0 auto 20px;
  /* padding: 20px; */
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background-image: url("../assets/imgs/avatar.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: all 0.3s;

  &:hover{
    transform: scale(1.03);
  }

  .left-avatar img{
    width: 100px;
    height: 100px;
    margin: 20px;
    border-radius: 20px;
  }

  .center-data{
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    flex-grow: 1;

    .username{
      font-size: 20px;
      font-weight: bold;
      text-shadow: 0px 0px 5px white;
    }
  }

  .right-nav{
    margin-right: 20px;

    button{
      width: 80px;
      height: 40px;
      font-size: 20px;
      border-radius: 10px;
    }
  }
}
</style>