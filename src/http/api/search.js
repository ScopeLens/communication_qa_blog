import http from "../http.js";
import rootPath from "./root.js";

const partPath="/search"

export const SearchUsersByNickname=(params) =>{
    return http.get(rootPath+partPath+"/users", params);
}
export const SearchPostsByTitleOrTag=(params) =>{
    return http.get(rootPath+partPath+"/posts", params);
}