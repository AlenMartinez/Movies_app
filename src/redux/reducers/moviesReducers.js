
import { createSlice } from '@reduxjs/toolkit'
//middleware
import { fulFilledMovies, pendingMovies, rejectedMovies} from '../../core/middleware'
import { createAsyncThunk } from '@reduxjs/toolkit'
//actions
//import { logoutAction } from '../actions/accessActions'
//services
import moviesServices from '../../service/moviesServices'

/*-getLoginThunk
se encarga de hacer fecht get 
*/
export const getMoviesThunk = createAsyncThunk(
  'get/getMovies',
    async (data) => {
        const res = await moviesServices.getMoviesData(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
})


export const getShowMoviesThunk = createAsyncThunk(
  'get/getShowMovies',
    async (data) => {
        console.log('get/getShowMovies',data)
        const res = await moviesServices.getShowMoviesData(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
})




export const moviesReducers = createSlice({
    name: 'movies',
    initialState: {},
    reducers: {
    },
    extraReducers: {
        // request middware /peliculas
        [getMoviesThunk.pending]: (state, { payload }) => fulFilledMovies(state),
        [getMoviesThunk.fulfilled]: (state, { payload }) => pendingMovies(state,payload),
        [getMoviesThunk.rejected]: (state, { payload }) => rejectedMovies(state),
  }

})



export default moviesReducers