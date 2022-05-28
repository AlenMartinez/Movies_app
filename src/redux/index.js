import accessReducers from './reducers/accessReducers'
import moviesReducers from './reducers/moviesReducers'
import alertReducers from './reducers/alertReducers'
//thunk
//login and access
import { getLoginThunk, getTokenVerifyThunk} from './thunk/access'
//movies data
import { getShowMoviesThunk, getMoviesThunk, getCriticsMoviesThunk, getCommentsMoviesThunk} from './thunk/movies'



//all reducers
export const Reducers = {
  reducer: {
    access: accessReducers.reducer,
    alert: alertReducers.reducer,
    movies: moviesReducers.reducer
  },
};

//all actions
//login
export const { loginAction, logoutAction, tokenVerificAction} = accessReducers.actions
//alert
export const { actionAlert, clearAlert } = alertReducers.actions
//comments
export const { addCommentsMovies, editCommentsMovies } = moviesReducers.actions


//tunk
export {
  //login
  getTokenVerifyThunk,
  getLoginThunk,
  //movies
  getMoviesThunk,
  getShowMoviesThunk,
  getCriticsMoviesThunk,
  getCommentsMoviesThunk
};
