import React, {Component} from 'react'
//import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import './App.css'
import { configureStore } from '@reduxjs/toolkit'
import { Logger } from 'redux-logger'
import Info from './Info'
import UserAgent from './UserAgent'


const store = configureStore({
    reducer: reducer,
  applyMiddleware :[thunk,Logger] 

})



class App extends Component {
  render(){
  return (
    <Provider store={store} >
    <div className="App">
      <Info/>
      <br/>
      <UserAgent/>
    
    </div>
    </Provider>
  );
}
}
export default App;
