import axios from "../ultites/axios";

export const getHomeApi=()=>new Promise(async(resolve,reject)=>{
    try {
        const response= await axios({
            url:'/home',
            method:'get'
        })
        resolve(response)
    } catch (error) {
        reject(error)
    }
})