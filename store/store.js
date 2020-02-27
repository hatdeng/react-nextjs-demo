import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {
    count: 0
}

const userInitialState = {
    username: 'jokcy'
}
const ADD = 'ADD'

function countReducer (state = initialState, action) {
    console.log(state, action)
    switch (action.type) {
        case ADD: 
            return {count: state.count + (action.num || 1)}
        default: 
            return state
    }
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'

function userReducer(state = userInitialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.name
            }
            default:
                return state
    }
}
const allReducers = combineReducers({
    counter: countReducer,
    user: userReducer
})
/* const store = createStore(
    allReducers, 
    {
        counter: initialState,
        user: userInitialState
    },
    composeWithDevTools(applyMiddleware(ReduxThunk)),
) */


//console.log(store.getState())
//
export function add(num) {
    return {
        type: ADD,
        num
    }
}

function assAsync (num) {
    return (dispath) => {
        setTimeout(()=>{
            dispath(add(num))
        }, 1000)
    }
}

/* //store.dispatch({type: ADD})
store.dispatch(assAsync(5))
//store.dispatch(add(2))
store.dispatch({type: UPDATE_USERNAME, name: 'Leilail'})
console.log(store.getState())

store.subscribe(()=>{
    console.log('chagned', store.getState())
})
store.dispatch({type: ADD}) */


export default function initializeStore (state) {
    const store = createStore(
        allReducers, 
        Object.assign(
            {},
            {
                counter: initialState,
                user: userInitialState
            },
            state,
        ),
        composeWithDevTools(applyMiddleware(ReduxThunk)),
    )
    return store
}