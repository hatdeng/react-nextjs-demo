import { Button } from 'antd'
import getConfig from 'next/config'
const api = require('../lib/api')

const { publicRuntimeConfig } = getConfig()
function Index ({ userRepos, userStaredRepos, isLogin }){
    console.log(userRepos, userStaredRepos,  isLogin)
    if(!isLogin) {
        return <div className="root">
            <p>You have not login  Please login </p>
            <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>Login </Button>
            <style jsx>{`
                .root {
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    }
    return (<span>Index</span>)
}
Index.getInitialProps = async ({ ctx, reduxStore })=>{
    /* const result = await axios
    .get('/github/search/repositories?q=react')
    .then(resp=> console.log(resp)) */

    const user = reduxStore.getState().user
    console.log(reduxStore)
    if(!user || !user.id) {
        return {
            isLogin: false
        }
    }
    const userRepos = await api.request(
        {
            url: '/user/repos',
        },
        ctx.req,
        ctx.res
    )

    const userStaredRepos = await api.request({
            url: '/user/starred',
        },
        ctx.req,
        ctx.res,
    )
    return {
        isLogin: true,
        userRepos: userRepos.data,
        userStaredRepos: userStaredRepos.data
    }
}
export default Index