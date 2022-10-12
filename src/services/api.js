import axios from 'axios';


const apiClient = axios.create({
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin' : 'http://localhost:3000'
    },
    baseURL: 'http://127.0.0.1:8000',
    withCredentials: false,
});

export default apiClient;

