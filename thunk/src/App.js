import React, {Component} from 'react'
//import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import  {reducer}  from './reducer'
import thunk from 'redux-thunk'
import './App.css'
import { createStore, applyMiddleware } from 'redux'
import { Logger } from 'redux-logger'
import Info from './Info'


const store = createStore(
    applyMiddleware(reducer,(thunk,Logger)) 
)



class App extends Component {
  render(){
  return (
    <Provider store={store} >
    <div className="App">
      <Info/>
    </div>
    </Provider>
  );
}
}
export default App;
