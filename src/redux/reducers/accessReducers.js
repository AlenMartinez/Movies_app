
import { createSlice } from '@reduxjs/toolkit'
//actions
import {logoutAction} from '../actions/accessActions'
//thunk
import { getLoginThunk,
     getTokenVerifyThunk
     } from '../thunk/access'
//midd
import { fulFilledLogin, pendingLogin, rejectedLogin } from '../../core/middleware'


const accessReducers = createSlice({
    name: 'access',
    initialState: {
    },
    reducers: {
        loginAction: (state, action) => {
            return state
        },
        tokenVerificAction: (state, action) => {
            return state
        },
        logoutAction: (state, action) => logoutAction()
    },
    extraReducers: {
    //login
    [getLoginThunk.pending]: (state, { payload }) => pendingLogin(state, payload ),
    [getLoginThunk.fulfilled]: (state, { payload }) => fulFilledLogin(state, payload),
    [getLoginThunk.rejected]: (state,{ payload }) => rejectedLogin(state, payload),
    //tokens
    [getTokenVerifyThunk.pending]: (state, { payload }) => {
        return state
    },
    [getTokenVerifyThunk.fulfilled]: (state, { payload }) => {
            if(payload.response.status)
        state.token_status = payload
        return state
    },
    [getTokenVerifyThunk.rejected]: (state,{ payload }) => {
        localStorage.clear()
        return state
    },
  }

})



export default accessReducers