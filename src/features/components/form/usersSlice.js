import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  status: 'idle',
  checked: false,
  currentUser: {},
  users: {
    ids: ['id1'],
    entities: {
      id1:{
       
      }
    },
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
