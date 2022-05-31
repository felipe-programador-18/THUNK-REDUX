import  {combineReducers}  from "redux"
import ip from './ip'
import ua from './ua'

export default combineReducers({ip, ua})
// combine reducer allows create the tiny inside redux!!
// manage all reducer part, is more beneficial!!