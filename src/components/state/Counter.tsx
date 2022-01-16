import React, {useReducer} from 'react'

const initialState = {count: 0}

type CounterState = {
    count: number
}

type CounterAction = {
    type: 'increment' | 'decrement' | 'reset',
    payload: number
}

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return {
                count: state.count + action.payload 
            }
        case 'decrement':
            return {
                count: state.count - action.payload 
            }
        
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h4>
                Count: {state.count}
            </h4>
            <button onClick={()=> dispatch({ type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <br />
            <br />
            <button onClick={()=> dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
        </div>
    )
}

export default Counter
