import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 686a6db32638b8cab81f537176f70f286f7e7302814016516fcf44979eff356a'
    }
});