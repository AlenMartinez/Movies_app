import accessReducers from './reducers/accessReducers'
import alertReducers from './reducers/alertReducers'
import {getLoginThunk} from './reducers/accessReducers'



//all reducers
export const Reducers = {
  reducer: {
    access: accessReducers.reducer,
    alert: alertReducers.reducer
  },
};

//all actions
export const { loginAction, logoutAction, tokenVerificAction} = accessReducers.actions
export const {actionAlert, clearAlert} = alertReducers.actions
//tunk
export {
  getLoginThunk
};
