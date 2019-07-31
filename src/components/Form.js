import React, { useState } from 'react'
import { create } from '../actions/a-Item'
import { useSelector } from 'react-redux'
import Item from './Item'
import '../styles/App.css'


export default props => {
  const [item, setItem] = useState('')
  const items = useSelector(appState => appState.items)

  function createItem(e) {
    e.preventDefault()
    create(item)
  }


  return (
    <form>
      <div id='adding'>
          <input 
            type='text' 
            value={item} 
            onChange={e => setItem(e.target.value)} 
            placeholder='Enter a task'>
          </input>
          <button id='submit' onClick={createItem}></button>
      </div>
      <div className="list">
          {items.map((item, id) => (
            <Item key={'item' + id} {...item}/>
          ))}
      </div>
    </form>
  )
}