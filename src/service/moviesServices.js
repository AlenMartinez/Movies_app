import axios from "axios";
import {API_URL} from './constants'



const getMoviesData = async (data) => {

    let limit = 10
    let paginate = 0
    console.log(data,'data')
    if (data) {
        if ('limit' in data) limit = data.limit
        if('paginate' in data) paginate = data.paginate
    }



    if (localStorage.getItem('token')) {
        const header = {
            accept: 'application/json',
            CSRFToken: localStorage.getItem('token'),
            
        }
        let url = `${API_URL}/pelicula/?limit=${limit}`
        if(paginate !== 0)  url = url.concat(`&offset=${paginate}`)
        return await axios.get(url, header);
    }
      

}

const getShowMoviesData = async (id) => {
    if (localStorage.getItem('token')) {
        const header = {
            accept: 'application/json',
            CSRFToken: localStorage.getItem('token'),
            
        }

        let url = `${API_URL}/pelicula/${id}/`       
        return await axios.get(url, header);
    }

}


const moviesServices = {
  getMoviesData,
  getShowMoviesData

};

export default moviesServices;