import store from '../store'


let id = 1

export function create(item) {
  store.dispatch({
    type: 'ADD_TASK',
    payload: {item,
    id: id,
    value: item,
    checked: false
    }
  })
  id++
}

export function remove(id) {
  store.dispatch({
    type: 'REMOVE_TASK',
    payload: id
  })
}

export function modify(item) {
  store.dispatch({
    type: 'MODIFY_TASK',
    payload: {
      id: item.id,
      value: item.value,
      checked: item.checked
    }
  })
}

export function setFilter(filter) {
  store.dispatch({
    type: "CHANGE_FILTER",
    payload: filter
  })
}

export function clearCompleted() {
  store.dispatch({
    type: "CLEAR"
  })
}

export function markAll() {
  store.dispatch({
    type: "MARK_ALL"
  })
}