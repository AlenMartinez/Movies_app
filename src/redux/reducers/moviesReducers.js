
import { createSlice } from '@reduxjs/toolkit'
//middleware
import { fulFilledMovies, pendingMovies, rejectedMovies} from '../../core/middleware'
//thunk movies
import {getShowMoviesThunk, getMoviesThunk, getCriticsMoviesThunk, getCommentsMoviesThunk} from '../thunk/movies'


const moviesReducers = createSlice({
    name: 'movies',
    initialState: {
        movie_comments:[]
    },
    reducers: {
        addCommentsMovies: (state, { payload }) => {
            return {
                ...state,
                movie_comments: payload
            }
        },
        editCommentsMovies: (state, { payload }) => {
            return state
        }
    },
    extraReducers: {
        // request middware /peliculas
        [getMoviesThunk.pending]: (state, { payload }) => fulFilledMovies(state),
        [getMoviesThunk.fulfilled]: (state, { payload }) => pendingMovies(state,payload),
        [getMoviesThunk.rejected]: (state, { payload }) => rejectedMovies(state),
        //view movie id
        [getShowMoviesThunk.pending]: (state, { payload }) => {
          return state
        },
        [getShowMoviesThunk.fulfilled]: (state, { payload }) => {
          state.movie = payload
          return state
        },
        [getShowMoviesThunk.rejected]: (state, { payload }) => {
          return state
        },
        //critics
        [getCriticsMoviesThunk.pending]: (state, { payload }) => {
          return state
        },
        [getCriticsMoviesThunk.fulfilled]: (state, { payload }) => {
          if(!payload.response.data){
            return {}
          }
          state.movie_critics = payload
          return state
        },
        [getCriticsMoviesThunk.rejected]: (state, { payload }) => {
          return state
        },
        //comments
        [getCommentsMoviesThunk.pending]: (state, { payload }) => {
          return state
        },
        [getCommentsMoviesThunk.fulfilled]: (state, { payload }) => {
          state.movie_comments = payload
          return state
        },
        [getCommentsMoviesThunk.rejected]: (state, { payload }) => {
          return state
        },
        
  }

})



export default moviesReducers