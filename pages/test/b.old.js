import Head from 'next/head'

import React, { 
    useState, 
    useReducer, 
    useContext, 
    useLayoutEffect, 
    useEffect,
    useRef
} from 'react'

import MyContext from '../../lib/my-context'

class MyCount extends React.Component {
    constructor(){
        super()
        this.ref = React.createRef()
    }
    state = {
        count: 0
    }

    componentDidMount (){
        //this.refs.abc
        this.ref.current
        this.interval = setInterval(()=>{
            this.setState({count: this.state.count + 1 })
        }, 1000)
    }
    componentWillUnmount () {
        if(this.interval) {
            clearInterval(this.interval)
        }
    }
    render () {
        return (
            <>
                <span ref={this.ref}>test</span>{this.state.count}
            </>
        )
    }
}

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
    //const [count, setCount] = useState(0) // [a, b]

    const [count, dispatchCount ] = useReducer(countReducer, 0)
    const [name, setName] = useState('Jokcy')

    const context = useContext(MyContext)

    const inputRef = useRef()

    /* useEffect(()=>{
        const interval = setInterval(()=>{
            //setCount(c => c + 1)
            dispatchCount(count, add)
        }, 1000)

        return ()=> clearInterval(interval)
    }, []) */
     // 会在属性更新后dom更新之后更新,更新HTML之后
    useEffect(()=>{
        //console.log("effect ivvoked")
        console.log(inputRef)
        return ()=> {console.log('effect deteched')}
    },[count])
    // 会在属性更新后dom更新之前更新, 更新HTML之前
    /* useLayoutEffect(()=>{
        console.log("useLayoutEffect ivvoked")
        return ()=> {console.log('useLayoutEffect deteched')}
    },[count]) */


    return (
        <>
            <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button onClick={()=>{dispatchCount({type: 'add'})}}>{count}</button>

            <p>{context}</p>
            
        </>
    )
}

export default MyCountFunc

/* export default ()=>{
    return (
        <>
            This is page b
        </>
    )
} */