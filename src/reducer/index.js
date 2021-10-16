import {combinedReducer} from 'redux';

const songList=()=>{
    return[
        {name:"Sajib",duration:"1:00"},
        {name:"Sajib",duration:"1:00"},
        {name:"Sajib",duration:"1:00"},
        {name:"Sajib",duration:"1:00"}
    ]
}

const selectSong=(selectSong=null,action)=>{
    if (action.type==="SELECT_SONG"){
        return selectSong=action.payload;
    }
    return selectSong;
}
export default combinedReducer({
    songList:songList,
    selectSong:selectSong
})