import accessReducers from './reducers/accessReducers'
import moviesReducers from './reducers/moviesReducers'
import alertReducers from './reducers/alertReducers'
import {getLoginThunk} from './reducers/accessReducers'
import {getMoviesThunk} from './reducers/moviesReducers'



//all reducers
export const Reducers = {
  reducer: {
    access: accessReducers.reducer,
    alert: alertReducers.reducer,
    movies: moviesReducers.reducer
  },
};

//all actions
export const { loginAction, logoutAction, tokenVerificAction} = accessReducers.actions
export const {actionAlert, clearAlert} = alertReducers.actions
//tunk
export {
  getLoginThunk,
  getMoviesThunk
};
