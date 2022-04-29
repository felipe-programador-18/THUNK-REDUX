//create another const to request date
//theoritical this function yet
export const loalRequestDate = () =>{
    return {
        type:'LOAD_DATA_REQUEST'
    }
}


//create actions
export const loalData= () =>{
   return dispatch => {
   setTimeout(()=> dispatch(loalRequestDate()), 2000)
   }  
}


