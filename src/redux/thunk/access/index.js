import { createAsyncThunk } from '@reduxjs/toolkit'
import accessService from '../../../service/accessService'

const { getLoginRequest, getTokenVerifyRequest } = accessService;

export const getLoginThunk = createAsyncThunk(
  'get/getLogin',
    async (data) => {
    let {username,password} = data
        const res = await getLoginRequest(username, password).then((response) => {
          localStorage.setItem('user', username)
        return  response.data
        }).catch((error) => {
        return error
    })
    return res
})

export const getTokenVerifyThunk = createAsyncThunk(
  'get/getTokenVerify',
    async (data) => {
        const res = await getTokenVerifyRequest(data).then((response) => response.data).catch((error) => {
        return error
    })
    return res
})

