import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Symphony', duration:'3:50' },
        { title: 'Blue', duration:'4:20' },
        { title: 'Payphone', duration:'3:40' },
        { title: 'Canon in D', duration:'5:10' },
    ];
};
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});

