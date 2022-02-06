import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  status: 'idle',
  checked: false,
  currentUser: {},
  users: {
    ids: [],
    entities: {},
  },
}


const usersSlice = createSlice(sliceInvoker()) ; 


function sliceInvoker() {
    return {
        name:'users',
        initialState,
        reducers:{},
        extraReducers:{}
    }
}




export default usersSlice.reducer
