import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './Components/App'
import rootReducer from './Reducers/rootReducer'
import injectInitialDOM from './Modules/injectInitialDOM'
import './index.scss'

const root = injectInitialDOM()
const store = createStore(rootReducer)

console.log(store.getState())
store.subscribe(()=>{
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)
