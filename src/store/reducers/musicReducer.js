import actionTypes from "../actions/actionTypes"

//Songs là null thì ta không ở trong playList nữa
const initState={
    curSongId:null,
}

const musicReducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.SET_CUR_SONG_ID:
            return {
                ...state,
                curSongId:action.sid || null
            }
        
        default:
            return state
    }
}

export default musicReducer