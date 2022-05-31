import { combineReducers } from "redux"
// combine reducer allows create the tiny inside redux!!


const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

//trade name of reducer to up
export const ip = (state= INITIAL_STATE, action) =>{
   if(action.type === 'LOAD_DATA_REQUEST'){
      return {
          isFetching: true,
          data: [],
          error: false
      }
   }else if(action.type === 'LOAD_DATA_SUCESS'){
      return{
          isFetching: false,
          data: action.data,
          error: false
      }
   }else if(action.type === 'LOAD_DATA_ERROR'){
      return{
          isFetching: false,
          data: [],
          error: true
      }
   }
   return state
}

export default combineReducers({ip})