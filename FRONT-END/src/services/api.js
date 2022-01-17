import axios from 'axios';
const api = axios.create({
    BASE_URL : 'http://localhost:3003/'
})
export default api