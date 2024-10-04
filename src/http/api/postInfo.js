import http from "../http.js";
import rootPath from "./root.js";

const partPath="/post-detail"

export const AddFavoritesCount=(params) =>{
    return http.post(rootPath+partPath+"/add-favorite", params);
}
export const DelFavoritesCount=(params) =>{
    return http.post(rootPath+partPath+"/del-favorite", params);
}
export const AddViewsCount=(params) =>{
    return http.post(rootPath+partPath+"/add-view", params);
}
export const DelViewsCount=(params) =>{
    return http.post(rootPath+partPath+"/del-view", params);
}
export const AddLikesCount=(params) =>{
    return http.post(rootPath+partPath+"/add-like", params);
}
export const DelLikesCount=(params) =>{
    return http.post(rootPath+partPath+"/del-like", params);
}