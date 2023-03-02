import appReducer from "./appReducer";
import { combineReducers} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import musicReducer from "./musicReducer";
import isPlayingReducer from "./isPalyingReducer";

const commonConfig={
    storage:storage,
    stateReconciler:autoMergeLevel2
}

const musicConfig={
    ...commonConfig,
    key:'music',
    whiteList:['curSongId']
}

const rootReducer=combineReducers({
    app:appReducer,
    isPlaying:isPlayingReducer,
    music:persistReducer(musicConfig,musicReducer),
})

export default rootReducer