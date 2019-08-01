const initialState = {
  items: [],
  filters: "all"
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {...state, items:[action.payload, ...state.items]}

    case 'REMOVE_TASK':
      return {...state, items: state.items.filter(item => action.payload !== item.id)}

    case 'MODIFY_TASK':
      return {...state, items: state.items.map(item => item.id === action.payload.id ? action.payload : item)}

    case "CHANGE_FILTER":
      return {...state, filter: action.payload}

    case "CLEAR":
      return {...state, items: state.items.filter(item => !item.checked)}
    
    case "MARK_ALL":
      return {...state, items: state.items.map(item => ({...item, checked: true}))}

    default:
      return state
  }
}