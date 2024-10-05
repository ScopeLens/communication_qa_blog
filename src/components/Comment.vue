<template>
    <div class="Comment-container">
        <img :src="useAuth.ImgUrl+comment['avatar_url']" alt="" class="avatar">
        <div class="user-data">
            <div class="info">
              <h2 class="username">{{comment['nickname']}}</h2>
              <el-popconfirm
                  confirm-button-text="删除"
                  cancel-button-text="取消"
                  :icon="InfoFilled"
                  icon-color="#626AEF"
                  title="确定要删除吗?"
                  @confirm="confirmEvent"
              >
                <template #reference>
                  <el-icon v-show="isEdit"><DeleteFilled /></el-icon>
                </template>
              </el-popconfirm>
            </div>
            <p class="c-body">{{comment['content']}}</p>
            <div class="comment-nav">
                <span class="date">{{handleDate(comment['created_at'])}}</span>
                <span class="like"><i class="iconfont icon-dianzan"></i>100</span>
                <button @click="replyShow=!replyShow">回复</button>
            </div>
            <div class="more-comment">
                <span class="open-list" @click="isShow=!isShow" v-show="!isShow">共有{{}}条回复,点击查看</span>
                <div class="comment-list" v-show="isShow">
                    <SecondaryComment v-for="(item, index) in SClist" :key="index" :data="item" @click="replyShow=!replyShow"></SecondaryComment>
                </div>
            </div>
            <Reply v-show="replyShow"></Reply>
        </div>
    </div>
</template>
<script setup>
import { ref,computed } from 'vue';
import SecondaryComment from './SecondaryComment.vue';
import Reply from './Reply.vue';
import {useAuthStore} from "../stores/authStore";
import {handleDate} from "../utils/date";
import {DeleteFilled,InfoFilled} from "@element-plus/icons-vue";
import {DelRepliesCount} from "../http/api/postInfo";

const useAuth=useAuthStore()
const isShow=ref(false);
const replyShow=ref(false);
const props=defineProps(['comment'])
const isEdit=computed(()=>{
  return props.comment['username'] === useAuth.Username;
})

const confirmEvent = () => {
  DelRepliesCount({
    post_id:props.comment['post_id'],
    comment_id:props.comment['comment_id'],
  })
}

</script>
<style scoped lang="scss">
.Comment-container{
  width:100%;
  margin: 15px 0;
  padding: 10px;
  border-bottom: 2px solid gray;
  display: grid;
  grid-template-columns: 1fr 6fr;

  .avatar{
    width:100px;
    height:100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user-data {

    .info{
      display: flex;
      justify-content: space-between;
    }
    .c-body{
      margin:5px 0;
    }

    .comment-nav{
      margin: 5px 0;
      font-size: 15px;

      .like{
        margin: 0 25px;
      }

      >button{
        border: 0;
        background-color: transparent;
      }
    }

    .more-comment{
      .open-list{
        color: gray;
        cursor: pointer;
      }
    }
  }
}
</style>