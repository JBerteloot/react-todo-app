import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Form from './Form'


export default props => {
  return (
    <Provider store={store}>
      <div id='container'>
        <header>
         <h1>todos</h1>
        </header>
        <Form />
        <footer>Brought to you by "That was painful" &copy;</footer>
      </div>
    </Provider>
  )
}