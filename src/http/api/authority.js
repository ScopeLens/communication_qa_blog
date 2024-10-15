import http from "../http.js";

const Authority="/authority"

export const GetPower=()=>{
    return http.get(Authority+"/limit")
}