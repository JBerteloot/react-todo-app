import React from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Form from './Form'
//import Footer from './Footer'

export default props => {
  return (
    <Provider store={store}>
      <div id='container'>
        <h1>Get it done!</h1>
        <Form />
        {/* <Footer /> */}
      </div>
    </Provider>
  )
}