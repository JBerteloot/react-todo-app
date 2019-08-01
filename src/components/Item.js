import React, { useState, useEffect } from 'react'
import { remove, modify } from '../actions/a-Item'
import MaterialIcon from "material-icons-react"

export default props => {
  const [value, setValue] = useState(props.value)
  const [checked, setChecked] = useState(props.checked)

  useEffect(() => {
    modify({
      value: value,
      checked: checked,
      id: props.id
    })
  }, [value, checked, props.id])

  function deleteItem() {
    remove(props.id)
  }


  return (
    <li className="task">
      <input type="checkbox" id={"check" + props.id} checked={checked} onChange={e => setChecked(!checked)} />
      <label htmlFor={"check" + props.id} className="replace">
        <MaterialIcon icon="done" />
      </label>
      <input value={value} onChange={e => setValue(e.target.value)} id="input"/>
      <button type="button" onClick={deleteItem}><MaterialIcon icon="delete"/></button>
    </li>
  )
}