import axios from 'axios';
import { authorization } from '../utils';

const api = axios.create({
   //baseURL: 'http://192.168.1.40:8080/', //local
   baseURL: 'http://wagner.vps-kinghost.net:8080/gerenciamentodesenha-api/',
   headers: {
        Authorization: authorization(),
    }
});

export default api;