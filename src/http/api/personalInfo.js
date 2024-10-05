import http from "../http.js";
import rootPath from "./root.js";

const partPath="/personal-detail"

export const UnfollowUser=(params) =>{
    return http.post(rootPath+partPath+"/unfollow-user", params);
}
export const FollowUser=(params) =>{
    return http.post(rootPath+partPath+"/follow-user", params);
}
export const UpdateAvatar=(params) =>{
    return http.post(rootPath+partPath+"/upload-avatar", params);
}
export const GetFollowers=(params) =>{
    return http.post(rootPath+partPath+"/followers", params);
}
export const GetFollowing=(params) =>{
    return http.post(rootPath+partPath+"/following", params);
}
export const ShowFavorite=() =>{
    return http.post(rootPath+partPath+"/show-favorites", {});
}
export const ShowView=() =>{
    return http.post(rootPath+partPath+"/show-views", {});
}
export const GetRepliesToMyComments=(params) =>{
    return http.post(rootPath+partPath+"/show-message", params);
}