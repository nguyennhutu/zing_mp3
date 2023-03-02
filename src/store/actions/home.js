import actionTypes from "./actionTypes";
import { getHomeApi } from "../../apis/home";

export const getHome=()=>async(dispatch)=>{
  try {
    const response= await getHomeApi()
    if(response?.data.err===0){
      dispatch({
        type:actionTypes.GET_HOME,
        homeData:response.data.data.items
      })
    }else{
        dispatch({
            type:actionTypes.GET_HOME,
            homeData:null
        })
    }
  } catch (error) {
    dispatch({
        type:actionTypes.GET_HOME,
        homeData:null
    })
  }
}
