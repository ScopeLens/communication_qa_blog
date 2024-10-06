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
  AddRepliesCount({
    "post_id":props.post_id,
    "content":replyContent.value,
    "parent_id":props.comment_id
  }).then(res=>{
    if(res.status!==200){
      ElMessage.error('回复失败.')
    }else{
      replyContent.value = ""
      ElMessage({
        message: '回复成功.',
        type: 'success',
      })
    }
  })
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
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }

  .nav{
    display: flex;
    flex-direction: column;
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