import axios from "axios";
import {API_URL} from './constants'


const header = () => {
    return  {
        accept: 'application/json',
    
    }
}


const getMoviesData = async (data) => {

    let limit = 10
    let paginate = 0
    
    if (data) {
        if ('limit' in data) limit = data.limit
        if('paginate' in data) paginate = data.paginate
    }


    let url = `${API_URL}/pelicula/?limit=${limit}`
    if(paginate !== 0)  url = url.concat(`&offset=${paginate}`)
    return await axios.get(url, header());

      

}
//ver
const getShowMoviesData = async (id) => {
    let url = `${API_URL}/pelicula/${id}/`       
    return await axios.get(url,header());
}
//criticas
const getCommentsMovies = async (id) => {
    let url = `${API_URL}/pelicula/${id}/comentarios/`       
    return await axios.get(url,header());
}

//comments
const getCriticsMovies = async (id) => {
    let url = `${API_URL}/pelicula/${id}/criticas/`       
    return await axios.get(url,header());
}


const moviesServices = {
  getMoviesData,
  getCriticsMovies,
    getShowMoviesData,
  getCommentsMovies

};

export default moviesServices;