import http from "../http.js";
import rootPath from "./root.js";

const partPath="/search"

export const SearchUsersByNickname=(params) =>{
    return http.get(rootPath+partPath+"/users", params);
}

export const SearchUsersByUsername=() =>{
    return http.get(rootPath+partPath+"/user-self");
}

export const SearchPostsByTitle=(params) =>{
    return http.get(rootPath+partPath+"/post-title", params);
}

export const SearchPostsByTag=(params) =>{
    return http.get(rootPath+partPath+"/post-tag", params);
}

export const SearchPostsByUsername=(params) =>{
    return http.get(rootPath+partPath+"/post-username", params);
}

