import axios from 'axios';

const KEY = 'AIzaSyCfbOs59VYHCiKR8jHF0YmTf9RCqNJaoQQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        max: 5,
        key: KEY
    }
});
