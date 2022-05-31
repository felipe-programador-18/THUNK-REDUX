import axios from "axios"



//create another const to request date
//theoritical this function yet
export const loalRequestDate = () =>{
    return {
        type:'LOAD_DATA_REQUEST'
    }
}
export const loadErrorRequest = () =>{
    return {
        type:'LOAD_DATA_ERROR'
    }
}

//create another function to testing and learning more about redux thunk!!!
//function sincrona
export const loaDateSucess = (data) => {
    return{
        type:'LOAD_DATA_SUCESS',
        data: data
    }
}

//create actions
//this function serve to manage another functions and executive another functions assincrona
export const loalData= () =>{
   return dispatch => {
    dispatch(loalRequestDate())
    axios
    .get('http://httpbin.org/ip')
    .then(({data}) => dispatch(loaDateSucess(data)))
    .catch(() => dispatch(loadErrorRequest()) )
   //setTimeout(()=> dispatch(loalRequestDate()), 2000)
   }  
}


