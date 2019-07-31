const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, items:[...state.items, action.payload]}

    case 'REMOVE_TASK':
      return {...state, items: state.items.filter(i => action.payload !== i.id)}

    case 'COMPLETE_TASK':
        return {...state, items: state.items.map(i =>
            i.id === action.id ? { ...i, complete: !i.complete } : i)}

    default:
      return state
  }
}