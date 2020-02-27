import App from 'next/app'
import 'antd/dist/antd.css'
import MyContext from '../lib/my-context'
import Layout from '../components/layout'
import { Provider } from 'react-redux'

import WithReduxApp from '../lib/with-redux'

class MyApp extends App {

    state = {
        context: 'value'
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
            <Layout>
                <Provider store={reduxStore}>
                    <MyContext.Provider value={this.state.context}>
                    <Component {...pageProps} />
                    <button onClick={()=>{this.setState({context: `${this.state.context}111111`})}}>Update context</button>
                    </MyContext.Provider>
                </Provider>
            </Layout>
        )
    }
}

export default WithReduxApp(MyApp)