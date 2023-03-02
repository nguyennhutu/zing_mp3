import actionTypes from "../actions/actionTypes"

const initState={
    isPlaying:false,
    atAlbum:false,
    songs:null
}

const isPlayingReducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.PLAY:
            return {
                ...state,
                isPlaying:action.Flag
            }
            case actionTypes.SET_ALBUM:
                return {
                    ...state,
                    atAlbum:action.Flag
                }
             case actionTypes.PLAYLIST:
                    return {
                        ...state,
                        songs:action.songs || null
                    }
        default:
            return state
    }
}

export default isPlayingReducer