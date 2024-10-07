<template>
    <div class="PH-container" v-loading="isLoading">
        <div class="info">
            <img :src="useAuth.AvatarURL" class="bg-img" alt="背景">
            <img :src="useAuth.AvatarURL" class="avatar-img" alt="头像">
            <div class="detail">
                <h2>{{ useAuth.Nickname }}</h2>
                <div class="Ftwo">
                    <span @click="toFollowers">粉丝数:{{useAuth.FollowersCount}}</span>
                    <span @click="toFollowing">关注数:{{useAuth.FollowingCount}}</span>
                </div>
                <div class="nav">
                    <button @click="dialogFormVisible = true">编辑信息</button>
                    <el-upload
                        class="avatar-uploader"
                        :show-file-list="false"
                        :auto-upload="false"
                        :on-change="uploadAvatar"
                    >
                    <button>上传头像</button>
                    </el-upload>
                </div>
            </div>
        </div>
        <el-dialog v-model="dialogFormVisible" title="个人信息" width="500">
          <div>用户名</div>
          <el-input
              v-model="formData.text"
              maxlength="10"
              placeholder="昵称"
              show-word-limit
              type="text"
          />
          <div style="margin: 20px 0" />
          <div>个性签名</div>
          <el-input
              v-model="formData.textarea"
              maxlength="30"
              placeholder="签名表明态度，我想我可以更酷..."
              show-word-limit
              type="textarea"
          />
          <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogFormVisible = false">
                取消
              </el-button>
              <el-button type="primary" @click="dialogFormVisible = false">
                保存
              </el-button>
            </div>
          </template>
        </el-dialog>
        <PostList :postList="postList"></PostList>
    </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
import PostList from '../components/PostList.vue';
import {SearchPostsByUsername} from "../http/api/search";
import {useAuthStore} from "../stores/authStore";
import {UpdateAvatar} from "../http/api/personalInfo.js";
import {useRouter} from "vue-router";

const isLoading=ref(false);
const postList=ref([])
const useAuth=useAuthStore()
const dialogFormVisible=ref(false)
const formData=ref({
  text:"",
  textarea:""
})
const router=useRouter()

const uploadAvatar=(file)=>{
  const formData = new FormData();
  formData.append('avatar', file.raw);
  UpdateAvatar(formData)
}

const toFollowers=()=>[
  router.push("/followers")
]

const toFollowing=()=>[
  router.push("/followings")
]

async function DataInit() {
  isLoading.value = true
  postList.value = (await SearchPostsByUsername({
    username: useAuth.Username
  })).data
  isLoading.value = false
}

onMounted(()=>{
  DataInit();
})
</script>
<style scoped>
.info{
  height: 500px;
  margin: 0 20px 20px;
  border-radius: 10px;
  background-color: white;
  text-align: center;

  .bg-img{
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
    margin: 0 -20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

  }

  .avatar-img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    transform: translateY(-50%);
    object-fit: cover;
    object-position: center;
  }

  .detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(-100px);

    .Ftwo{
      width: 180px;
      display: flex;
      justify-content: space-evenly;
      cursor:pointer;

    }

    .nav{
      width: 200px;
      margin: 10px;
      display: flex;
      justify-content: space-between;

      button{
        font-size: 15px;
        border: 0;
        background-color: transparent;
        transition: all 0.1s;

        &:hover{
          color: rgb(0, 179, 255);
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>