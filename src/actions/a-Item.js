import store from '../store'

let id = 1

export function create(item) {
  store.dispatch({
    type: 'ADD_TASK',
    payload: {item,
    id: id++}
  })
}

export function remove(id) {
  store.dispatch({
    type: 'REMOVE_TASK',
    payload: id
  })
}

export function complete(id) {
  store.dispatch({
    type: 'COMPLETE_TASK',
    payload: id
  })
}