import React from 'react'
import { remove, complete } from '../actions/a-Item'
import MaterialIcon from "material-icons-react"

export default props => {
  function deleteItem() {
    remove(props.id)
  }

  function completeItem() {
    complete(props.id)
  }

  return (
    <div>
      <ul>
        <li className="task">
          <input type="checkbox" id="myCheck" className="completed" onClick={completeItem}/>
          <p>{props.item}</p>
          <button className="delete" onClick={deleteItem}><MaterialIcon icon="delete"/></button>
        </li>
      </ul>
    </div>
  )
}