/* import MarkdownIt from 'markdown-it'

import 'github-markdown-css' */
import dynamic from 'next/dynamic'
import withRepoBase from '../../components/with-repo-basic'
import api from '../../lib/api'
//import MDRenderer from '../../components/MarkdownRender'

const MDRenderer = dynamic(()=>import('../../components/MarkdownRender'))
/* 
可以添加loading 组件
const MDRenderer = dynamic(
    ()=>import('../../components/MarkdownRender'),
    {
        loading: ()=> <p>Loading</p>
    }) */
/* const md = new MarkdownIt({
    html: true,
    linkify: true,
})

function b64_to_utf8 (str) {
    return decodeURIComponent(escape(atob(str)))
}

function Detail ({readme}) {
    //console.log(atob(readme.content))
    const content = b64_to_utf8(readme.content)
    const html = md.render(content)
    return <div className="markdown-body"><div dangerouslySetInnerHTML={{__html: html}} /></div>
} */

function Detail({ readme }) {
    return <MDRenderer content={readme.content} isBase64={true} />
}

Detail.getInitialProps = async({ ctx: { query: { owner, name }, req, res } })=>{

    const readmeResp = await api.request({
        url: `/repos/${owner}/${name}/readme`
    }, req, res)

    return  {
        readme: readmeResp.data
    }
}

export default withRepoBase(Detail, 'index')
//import Axios from "axios"
// move to components/with-repo-base
/* import Repo from '../../components/Repo'
import Link from 'next/link'
import api from '../../lib/api'
import { Result } from 'antd'

function makeQuery (queryObject) {
    const query = Object.entries(queryObject).reduce(()=>{
        result.push(entry.join('='))
        return  result

    }, []).join('&')

    return `?${query}`
}

function Detail ({ repoBasic, router }) {

    const query  = makeQuery(router.query)
    console.log(repoBasic)
    return (
        <div className="root">
            <div className="repo-basic">
                <Repo repo={repoBasic} />
                <div className="tabs">
                    <Link href={`/detail${query}`}>
                        <a className="tab index">Readme</a>
                    </Link>
                    <Link href={`/detail/issues${query}`}>
                        <a className="tab issues">Issues</a>
                    </Link>
                </div>
            </div>
            <div className="">
                Readme 
            </div>
            <style jsx>{`
                .root {
                    padding-top: 20px;
                }
                .repo-basic {
                    padding: 20px;
                    border: 1px solid #eee;
                    margin-bottom: 20px;
                    border-radius: 5px;
                }
                .tab + .tab {
                    margin-left: 20px;
                }
            `}</style>
        </div>
    )
}

Detail.getInitialProps = async ({ router, ctx }) => {
    console.log(router)
    console.log(ctx.query)

    const { owner, name } = ctx.query
    const repoBasic = await api.request({
        url: `/repos/${owner}/${name}`,
    }, ctx.req, ctx.res)
    console.log(repoBasic)
    return {
        repoBasic: repoBasic.data
    }
}    */

/*  
Page.getInitialProps = async ctx => {
    const res = await getch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()

    return { stars: json.stargazers_count }
}

export default Detail
*/

