import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/550?api_key=9082e6823dbd6b26f3d661a8d78dcbcc&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;