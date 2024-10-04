import http from "../http.js";
import rootPath from "./root.js";

const partPath="/post"

export const CreatePost=(params) =>{
    return http.post(rootPath+partPath+"/add-post", params,{
        'Content-Type': 'multipart/form-data'
    });
}
export const DeletePost=(params) =>{
    return http.post(rootPath+partPath+"/del-post", params);
}
export const CheckPostDetail=(params) =>{
    return http.post(rootPath+partPath+"/check-detail", params);
}