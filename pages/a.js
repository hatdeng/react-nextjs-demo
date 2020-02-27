import Router,{ withRouter } from 'next/router'
import getConfig from 'next/config'
import dynamic from 'next/dynamic'

import Head from 'next/head'
import styled from 'styled-components'
//import moment from 'moment'
//import Comp from '../components/comp'
const Comp = dynamic(import('../components/comp'))

const {serverRuntimeConfig, publicRuntimeConfig } = getConfig()

const Title = styled.h1`
    color: #fff000;
    font-size: 30px;
`

const Demo = ({router, name, time})=>{
    //const router = props.router
    //console.log(router)
    console.log(serverRuntimeConfig)
    console.log(publicRuntimeConfig)

    return (
        <span>
            <br />
            <Title>This is Title for H1 {time}</Title>
            <span className="bluetest">
            This is
            </span> A
            <br />
            <button onClick={()=>Router.push('/')} >送我去主页</button>
            <br />
            customKey: {process.env.customKey}
            <br />
         
            <Comp>AAA  {router.query.id} = {name}</Comp>
            <style jsx>{`
                .bluetest {
                    color: #00ff00
                }
            `}</style>
            <style jsx global>{`
                a {
                    color: #00ffff
                }
            `}</style>
        </span>
    )
}
Demo.getInitialProps = async (ctx) => {
    const moment = await import('moment')
    const promise = new Promise((resolve) => {     
        setTimeout( ()=>{
            resolve ({
                    name: 'jokecy',
                    time: moment.default(Date.now() - 60*1000).fromNow()
            })
        }, 10)        
    })

    return await promise
}
export default withRouter(Demo)

//https://spectrum.chat/next-js/general/next-js-userouter-query-amp-undefined~c4954ea2-405c-4e66-98fa-f8704d4d7f6e

/* import { withRouter } from 'next/router'

const Demo = ({router}) => {
    return(
        <div>
        {
            console.log(router)
        }            
            <div>这里是demo页</div>
            <div>id={router.query.id}.</div>
        </div>
    )
}
export default withRouter(Demo); */
/* 
import React from 'react'
import Router,{ withRouter } from 'next/router'

const Demo = (props) => {
    return(
        <>
            {console.log(props)}
            <button onClick={()=>Router.push('/')} >送我去主页</button>
            <div>这里是demo页</div>
            <div>id='{props.router.query.id}'</div>
        </>
    )
}
export default withRouter(Demo); */