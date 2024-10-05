import http from "../http.js";
import rootPath from "./root.js";

const partPath="/post"

export const CreatePost=(params) =>{
    return http.post(rootPath+partPath+"/add-post", params);
}
export const DeletePost=(params) =>{
    return http.post(rootPath+partPath+"/del-post", params);
}
export const CheckPostDetail=(params) =>{
    return http.post(rootPath+partPath+"/check-detail", params);
}
export const GetPostListByType=(params) =>{
    return http.get(rootPath+partPath+"/post-sort", params);
}

export const GetPostStatus=(params) =>{
    return http.post(rootPath+partPath+"/post-status", params);
}