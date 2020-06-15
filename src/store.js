import { createStore } from 'redux'

// CONSTANTES DE ACCIONES
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialState = 0

// REDUCER
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1

    default:
      return state
  }
}

// STORE
const store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState())
})

// ACCIONES

const increment = () => {
  return {
    type: INCREMENT,
  }
}

const decrement = () => {
  return {
    type: DECREMENT,
  }
}

store.dispatch(increment())
store.dispatch(decrement())

setTimeout(() => {
  store.dispatch(increment())
}, 1000)

// store.getState()
// store.dispatch()
// store.subscribe(fun)

export default store
