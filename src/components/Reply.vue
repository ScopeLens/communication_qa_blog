<template v-loading="isLoading">
     <div class="reply-content">
        <div class="info">
            <img :src="useAuth.AvatarURL" alt=""> <!-- 获取当前用户的头像信息 -->
        </div>
        <div class="nav">
            <textarea type="text" v-model="replyContent" placeholder="发言表明态度,我想我可以更酷..."></textarea>  <!--回复框-->
            <button @click="sendReply">发布</button>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useAuthStore} from "../stores/authStore.js";
import {AddRepliesCount} from "../http/api/postInfo.js";

const props=defineProps(["comment_id",'post_id']);
const useAuth=useAuthStore()
const isLoading=ref(false);
const replyContent=ref()
const sendReply=async () => {
  if (replyContent.value === "") return
  isLoading.value = true
  await AddRepliesCount({
    "post_id":props.post_id,
    "content":replyContent.value,
    "parent_id":props.comment_id
  })
  replyContent.value = ""
  isLoading.value = true
}
</script>
<style scoped lang="scss">
.reply-content{
    margin: 10px 0;
    display: flex;
    align-items: center;

  .info img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .nav{
    display: flex;
    flex-direction: column;
    align-items: right;
    flex-grow: 1;

    button{
      height: 20%;
      font-size: 15px;
      background-color: black;
      color: white
    }

    textarea{
      font-size: 18px;
      padding: 5px;
      resize: none;
    }
  }
}
</style>