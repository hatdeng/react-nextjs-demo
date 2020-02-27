import { useEffect } from 'react'
import axios from 'axios'

import Link from 'next/link'
import { Button } from "antd"
import Router from 'next/router'
import { connect } from 'react-redux'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

import { add } from '../store/store'
const events = [
    'routeChangeStart',
    'routeChangeComplete',
    'routeChangeError',
    'beforeHistoryChange',
    'hashChangeStart',
    'hashChangeComplete',
]

function makeEvent(type) {
    return (...args) => {
        console.log(type, ...args)
    }
}

events.forEach(event =>{
    Router.events.on(event, makeEvent(event))
})

const Index =  ({counter, username, rename, add})=>{
    function goToTestB () {
        Router.push({
            pathname: '/test/b',
            query:{
                id: 2
            }
        }, 'test/b/2')
    }

    useEffect(() => {
        axios.get('/api/user/info').then(resp => {
            console.log(resp)
        })
    }, [])

    return (
        <>  
            <br />
            bofore boday
            <br />
            <span className="test">Index</span>
            <br />
            <br />
            <br />
            <input value={username} onChange={(e) => rename(e.target.value)} />
            <button onClick={()=> add(counter)}>Do ADD</button>
            <br />
            <br />
            This is index page <Button className="primary">Button Click me</Button><br />
            <p>
                <Link href="/a?id=10000" as="/a/10000">
                    <a>
                    <span>This is a link to a</span>
                    <i>This is a link to a</i>
                    go to AAA
                    </a>
                </Link>
            </p>

            <Button onClick={goToTestB}> Test b</Button>
            <br />
            <span>count: {counter}</span><br />
            <span>username: {username}</span>

            <br />
            <a href={publicRuntimeConfig.OAUTH_URL}> Go to Login</a>
        </>
    )
}

Index.getInitialProps = async({ reduxStore })=>{
    reduxStore.dispatch(add(3))
    return {}
}

export default connect(function mapStateToProps(state){
    return {
        counter: state.counter.count,
        username: state.user.username,
    }
}, function mapDispatchToProps(dispatch){
    return  {
        add: (num) => dispatch({type: 'ADD', num }),
        rename: (name) => dispatch({type: 'UPDATE_USERNAME', name}),
    }
})(Index)