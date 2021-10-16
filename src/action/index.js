export const createSong=(song)=>{
    return{
        type:"CREATE_SONG",
        payload:song
    }
}