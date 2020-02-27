import Head from 'next/head'

import React, { 
    useState, 
    useReducer, 
    useContext, 
    useLayoutEffect, 
    useEffect,
    useRef,
    memo,
    useMemo,
    useCallback
} from 'react'



function countReducer (state, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state -1
        default: 
        return state
    }
}

function MyCountFunc () {

    const [count, dispatchCount ] = useReducer(countReducer, 0)
    const [name, setName] = useState('Jokcy')

    const countRef = useRef()

    countRef.current = count

    const config = useMemo(()=>({
        text: `Count is ${count}`,
        color: count > 3 ? 'red' : 'blue'
    }), [count])

    /* const handleButtonClick = useCallback(
        () =>  dispatchCount({ type: 'add' }),
        []
    ) */
    const handleButtonClick = useMemo(
        ()=> () =>  dispatchCount({ type: 'add' }),
        []
    )

    const handleAlterButtonClick = function (){
        setTimeout(()=>{
            alert(countRef.current)
        },
        2000)
    }

    return (
        <>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} />

           <Child 
            config={config}
            onButtonClick={handleButtonClick}
            />
            <button onClick={handleAlterButtonClick}>This is Alert count</button>
        </>
    )
}

const Child = memo(function Child({ onButtonClick, config }) {
    console.log('child render')
    return (
        <button onClick={onButtonClick} style={{ color: config.color }}>{config.text}</button>
    )
})

export default MyCountFunc

