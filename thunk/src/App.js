import React, {Component} from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import  {reducer}  from './reducer'
import './App.css'
import { Logger } from 'redux-logger'
import {Info} from './Info'


const store = configureStore(
 reducer, applyMiddleware(Logger)
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
