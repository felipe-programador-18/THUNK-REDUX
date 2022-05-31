 const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

//create another funtion to call off ua
 const ua = (state= INITIAL_STATE, action) =>{
    if(action.type === 'LOAD_UA_REQUEST'){
       return {
           isFetching: true,
           data: [],
           error: false
       }
    }else if(action.type === 'LOAD_UA_SUCESS'){
       return{
           isFetching: false,
           data: action.data,
           error: false
       }
    }else if(action.type === 'LOAD_UA_ERROR'){
       return{
           isFetching: false,
           data: [],
           error: true
       }
    }
    return state
 }

export default ua