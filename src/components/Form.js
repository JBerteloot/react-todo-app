import React, { useState } from 'react'
import { create, setFilter, clearCompleted, markAll } from '../actions/a-Item'
import { useSelector } from 'react-redux'
import Item from './Item'
import MaterialIcon from "material-icons-react"

export default props => {
  const [item, setItem] = useState('')
  const filter = useSelector(appState => appState.filter)
  const count = useSelector(appState => appState.items.filter(item => !item.checked).length)
  const allItemsCount = useSelector(appState => appState.items.length)
  
  const items = useSelector(appState => {
    const filter = appState.filter
    
    switch (filter) {
      case "active":
        return appState.items.filter(item => !item.checked)
      case "completed":
        return appState.items.filter(item => item.checked)
      default:
        return appState.items
    }
  })

  function handleSubmit(e) {
    e.preventDefault()
    setItem('')
    create(item)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div id='adding'>
        <button type="button" onClick={markAll}>
        <MaterialIcon icon="keyboard_arrow_down" />
        </button>
        <input 
          type='text' 
          placeholder='What needs to be done?'
          value={item} 
          onChange={e => setItem(e.target.value)} />
      </div>
      <ul className="list">
          {items.map(item => (
            <Item key={'item' + item.id} id={item.id} value={item.value} checked={item.checked}/>
          ))}
      </ul>
      {allItemsCount > 0 ? (
      <footer className="filters">
        <p>{count} items left</p>
        <div>
          <button className={filter === "all" ? "active" : ""} type="button" onClick={e => setFilter("all")}>All</button>
          <button className={filter === "active" ? "active" : ""} type="button" onClick={e => setFilter("active")}>Active</button>
          <button className={filter === "completed" ? "active" : ""} type="button" onClick={e => setFilter("completed")}>Completed</button>
        </div>
        <button type="button" onClick={clearCompleted}>Clear Completed</button>
      </footer>
      ) : ""}
      <button type='submit' style={{display:"none"}} ></button>
    </form>
  )
}