import { apiGetDetailPlaylist } from "../../apis/music"
import actionTypes from "./actionTypes"

export const actionSetCurSongId=(sid)=>(
    {
        type: actionTypes.SET_CUR_SONG_ID,
        sid
    }
)

export const actionPlay=(Flag)=>(
    {
        type: actionTypes.PLAY,
        Flag
    }
)

export const actionPlayAlbum=(Flag)=>(
    {
        type: actionTypes.SET_ALBUM,
        Flag
    }

)
export const actionSetPlaylist=(songs)=>(
    {
        type: actionTypes.PLAYLIST,
        songs
    }
)

export const actionIsloading=(flag)=>(
    {
        type: actionTypes.LOADING,
        flag:flag
    }
)

//Return ra 1 hàm
// export  const fetchDetailPlaylist=async(pid)=>async(dispatch)=>{
//    try {
//      const response=await apiGetDetailPlaylist(pid)
//      console.log('qq',response);
//      if(response?.data.err===0){
//         dispatch({
//             type:actionTypes.PLAYLIST,
//             songs:response.data?.data?.song?.items
//         })
//      }
//    } catch (error) {
//     dispatch({
//         type:actionTypes.PLAYLIST,
//         songs:null
//     })
//    }
// }