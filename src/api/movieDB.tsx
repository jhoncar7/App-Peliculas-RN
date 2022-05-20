import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1f2542ef0201157d946aa9df25c8e140',
        language: 'es-EN'
    }
});

export default movieDB;