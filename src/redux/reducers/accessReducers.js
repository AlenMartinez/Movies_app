
import { createSlice } from '@reduxjs/toolkit'
//tunk
import { fulFilledLogin, pendingLogin, rejectedLogin } from '../../core/middleware'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {logoutAction} from '../actions/accessActions'
import accessService from '../../service/accessService'
/*-getLoginThunk
se encarga de hacer fecht get 
*/
export const getLoginThunk = createAsyncThunk(
  'get/getLogin',
    async (data) => {
    let {username,password} = data
        const res = await accessService.getLoginRequest(username, password).then((response) => response.data).catch((error) => {
        return error
    })
    return res
})


export const accessReducers = createSlice({
    name: 'access',
    initialState: {},
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
    [getLoginThunk.pending]: (state, { payload }) => pendingLogin(state, payload ),
    [getLoginThunk.fulfilled]: (state, { payload }) => fulFilledLogin(state, payload),
    [getLoginThunk.rejected]: (state,{ payload }) => rejectedLogin(state, payload),
  }

})



export default accessReducers