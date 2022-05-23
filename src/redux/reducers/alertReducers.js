import { createSlice } from '@reduxjs/toolkit'
import { alertActions,clearAlertActions } from '../actions/alertActions'

export const alertReducers = createSlice({
  name: 'alertStatus',
  initialState: { alertStatus: false },
  reducers: {
    actionAlert: (state,action) => {
       return alertActions(action.payload)
    },
    clearAlert: (status,action) => {
      
      return clearAlertActions()
    }
  },
})



export default alertReducers