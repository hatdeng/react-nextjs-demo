import App from 'next/app'
import 'antd/dist/antd.css'
import MyContext from '../lib/my-context'
import Layout from '../components/layout'
import { Provider } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'

import WithReduxApp from '../lib/with-redux'
import PageLoading from '../components/pageLoading'

class MyApp extends App {

    state = {
        context: 'value',
        loading: false
    }

    startLoading = () => {
        this.setState({
            loading: true
        })
    }
    stopLoading = () => {
        this.setState({
            loading: false
        })
    }

    componentDidMount () {
        Router.events.on('routeChangeStart', this.startLoading)
        Router.events.on('routeChangeComplete', this.stopLoading)
        Router.events.on('routeChangeError', this.stopLoading)
        axios
        //.get('https://api.github.com/search/repositories?q=react')
        .get('/github/search/repositories?q=react')
        .then(resp=> console.log(resp))
    }

    componentWillUnmount () {
        Router.events.off('routeChangeStart', this.startLoading)
        Router.events.off('routeChangeComplete', this.stopLoading)
        Router.events.off('routeChangeError', this.stopLoading)
    }

    static async getInitialProps (ctx) {
        const { Component } = ctx
        console.log('app Init');
        let pageProps = {}
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps
        }
    }
    render () {
        const { Component, pageProps, reduxStore } = this.props
        //console.log(Component)
        return (
            <Provider store={reduxStore}>
                {console.log(this.state.loadding)}
                { this.state.loading ? <PageLoading /> : null }
                <Layout>
                    <MyContext.Provider value={this.state.context}>
                    <Component {...pageProps} />
                    </MyContext.Provider>
                </Layout>
            </Provider>
        )
    }
}

export default WithReduxApp(MyApp)