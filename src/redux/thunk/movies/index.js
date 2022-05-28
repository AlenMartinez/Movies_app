import { createAsyncThunk } from '@reduxjs/toolkit'
import moviesServices from '../../../service/moviesServices'
//api
const { getShowMoviesData, getMoviesData, getCriticsMovies, getCommentsMovies} = moviesServices;

//view
export const getShowMoviesThunk = createAsyncThunk(
  'get/getShowMovies',
    async (data) => {
        const res = await getShowMoviesData(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
})

//movies all
export const getMoviesThunk = createAsyncThunk(
  'get/getMovies',
    async (data) => {
        const res = await getMoviesData(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
})
//critics
export const getCriticsMoviesThunk = createAsyncThunk(
  'get/getCriticsMovies',
    async (data) => {
        const res = await getCriticsMovies(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
  })

//Comments
export const getCommentsMoviesThunk = createAsyncThunk(
  'get/getCommentsMovies',
    async (data) => {
        const res = await getCommentsMovies(data).then((response) => response.data).catch((error) => {
        return error
    })
   return res
  })
