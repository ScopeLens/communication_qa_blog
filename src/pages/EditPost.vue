<template>
    <div class="EP-container" v-loading="isLoading">
        <div class="title">
            <h2 class="h2-color">标题</h2>
            <input type="text" class="baseSize" v-model="postInfo.title">
        </div>
        <div class="content">
            <h2 class="h2-color">正文</h2>
            <textarea
                class="baseSize"
                placeholder="请输入正文"
                v-model="postInfo.content"
            ></textarea>
        </div>
        <div class="footer">
            <h2 class="h2-color">图片</h2>
            <el-upload
                list-type="picture-card"
                :auto-upload="false"
                :limit='9'
                :on-change="getImg"
                :on-exceed="showLimit"
            >
              <el-icon><Plus /></el-icon>
              <template #file="{ file }">
              <div
                  :style="{
                        width: '100%',
                        height: '100%',
                  }"
              >
                <img class="el-upload-list__item-thumbnail"
                     :style="{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }"
                     :src="file.url"
                     alt="" />
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  ><el-icon><zoom-in /></el-icon>
                  </span>
                  <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleDownload(file)"
                  ><el-icon><Download /></el-icon>
                  </span>
                  <span
                      v-if="!disabled"
                      class="el-upload-list__item-delete"
                      @click="handleRemove(file)"
                  ><el-icon><Delete /></el-icon>
                  </span>
                </span>
              </div>
            </template>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img
                :style="{
                  width: '100%',
                  objectFit: 'cover',
                }"
                :src="dialogImageUrl"
                alt="图片预览" />
          </el-dialog>
        </div>
        <div class="nav">
          <el-select
              v-model="postInfo.tags"
              multiple
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="为你的博文选择一些标签"
              style="width: 240px"
          >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
            <button @click="uploadPost">发布</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import {CreatePost} from "../http/api/post.js";
import {useRouter} from "vue-router";
import {ElMessageBox} from "element-plus";

const router=useRouter();
const isLoading=ref(false)
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
const postInfo=ref({
  title:"",
  content:"",
  tags:[],
  images:[]
})
const value = ref([])
const options = [
  {
    value: 'HTML',
    label: 'HTML',
  },
  {
    value: 'CSS',
    label: 'CSS',
  },
  {
    value: 'JavaScript',
    label: 'JavaScript',
  },
]

const handleRemove = (file) => {
  console.log(file)
}

const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleDownload = (file) => {
  console.log(file)
}

const getImg=(file,fileList)=>{
  postInfo.value.images=fileList
}

const showLimit=()=>{
  ElMessage({
    type: 'warning',
    message: '最多只能选择9张图片',
  })
}

function uploadPost(){
  ElMessageBox.confirm(
      '确认发布？',
      '确认',
      {
        confirmButtonText: '发布',
        cancelButtonText: '取消',
      }
  )
  .then(async () => {
    isLoading.value = true
    const formData = new FormData();
    formData.append('title', postInfo.value.title);
    formData.append('content', postInfo.value.content);
    if(postInfo.value.tags){
      postInfo.value.tags.forEach(tag => {
        formData.append("tags", tag);  // 数组字段名使用 `tags[]`
      });
    }
    if (postInfo.value.images) {
      postInfo.value.images.forEach(item => {
        formData.append("images", item.raw);
      })
    }
    await CreatePost(formData)
    await router.replace("/home")
    ElMessage({
      type: 'success',
      message: '发布成功',
    })
    isLoading.value = false
  })
  .catch(() => {
    ElMessage({
      type: 'info',
      message: '取消发布',
    })
  })
}
</script>
<style scoped lang="scss">
    .EP-container{
      margin: 0 20px 20px;
      background-color: white;
        border-radius: 10px;
        padding: 15px;
    }
    .h2-color{
      color: gray;
      margin-bottom: 10px;
    }
    .baseSize{
        width: calc(100% - 26px);
        padding: 10px;
        height: 20px;
        margin: 10px 0px;
        font-size: 20px;
        border: 3px solid black
    }
    .content textarea{
        resize: none;
        min-height: 120px;
    }
    .footer{
      ul{
        margin: 10px 0;

        li{
          display: inline-block;
          margin: 0 10px 10px 0;
          position: relative;

          img{
            width: 100px;
            height: 100px;
            object-fit: contain;
          }

          >button{
            width: 20px;
            height: 20px;
            position:absolute;
            text-align: center;
            line-height: 20px;
            top: 0;
            right: 0;
            background-color: gray;
            border: 0;

            >i{
              color: white;
              font-size: 20px;
              font-weight: bold;
            }
          }
        }
      }

      button{
        width: 100px;
        height: 100px;
        position: relative;

        >input{
          opacity: 0;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          position: absolute;
        }

        i{
          color: gray;
          font-size: 30px;
        }
      }
    }
    .nav{
        margin: 10px 0;
        display: flex;
      justify-content: space-between;

      button{
        width: 90px;
        height: 40px;
        background-color: rgb(0, 153, 255);
        border: 0;
        font-size: 20px;
        color: white;
        border-radius: 10px;
      }
    }
:deep(.el-dialog__body){
  width: 100%;
  height: 100%;
}
</style>