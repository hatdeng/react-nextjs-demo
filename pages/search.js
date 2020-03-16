import { memo, isValidElement, useEffect } from 'react'
import { withRouter } from 'next/router'
import { Row, Col, List, Pagination } from 'antd'
import Link from 'next/link'
import Router from 'next/router'
import Repo from '../components/Repo'

import { cacheArray } from '../lib/repo-basic-cache'

const api = require('../lib/api')



const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java']
const SORT_TYPES = [
    {
        name: 'Best Macth'
    },
    {
        name: 'Most Stars',
        value: 'stars',
        order: 'desc'
    },
    {
        name: 'Fewest Stars',
        value: 'stars',
        order: 'asc'
    },
    {
        name: 'Most Forks',
        value: 'forks',
        order: 'desc'
    },
    {
        name: 'Fewest Forks',
        value: 'forks',
        order: 'asc'
    }
]
/**
 * 
 * sort: order by
 * order: order by more and less
 * lang: language
 * page: how many
 */

const selectedItemStyle = {
    borderLeft: '2px solid #e36209',
    fontWegith: 400,
}

function noop () {
    
}

const per_page = 20

const isServer = typeof window === 'undefined'

const FilterLink = memo(({ name, query, lang, sort, order, page })=>{
    /* const doSearch = config => {
        Router.push({
            pathname: '/search',
            query: {
                query, 
                lang,
                sort,
                order,
            }
        })
    } 
    return <Link href={}><a href="#" onClick={doSearch}>{name}</a></Link> */

    let queryString = `?query=${query}`

    if (lang) queryString += `&lang=${lang}`
    if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`
    if (page) queryString += `&page=${page}`

    queryString += `&per_page=${per_page}`

    return (<Link href={`/search${queryString}`}>
            {isValidElement(name) ? name : <a>{name}</a> }                
            </Link>)
})

/* const doSearch = config => {
    Router.push({
        pathname: '/search',
        query: config
    })
} */
function Search ({ router, repos }) {
    //console.log(repos)
    //return <span>Search = {router.query.query}</span> 
    const { ...querys } = router.query
    const { sort, order, lang, page } = router.query

    useEffect(()=>{
        if(!isServer) cacheArray(repos.items)
    })
    /* const handleLanguageChange = (language) => {
        Router.push({
            pathname: `/search`,
            query: {
                query,
                lang: language, 
                sort,
                order
            }
        })
    }

    const handelSortChange = (sort) => {
        Router.push({
            pathname: `/search`,
            query: {
                query,
                lang,
                sort: sort.value,
                order: sort.order,
            }
        })
    } */

    /* const doSearch = useCallback(config => {
        Router.push({
            pathname: '/search',
            query: config
        })
    },[]) */

    return (
        <div className="root">
            <Row gutter={20}>
                <Col span={6}>
                    <List
                        bordered
                        header={<span className="list-header">Language</span>}
                        style={{ marginBottom: 20 }}
                        dataSource={LANGUAGES}
                        renderItem={item =>{
                            const selected = lang === item
                            return (
                                <List.Item style={selected ? selectedItemStyle : null}>
                                    {/* <a href="#" onClick={()=> doSearch({
                                        sort, order, query, lang: item
                                    })}>{item}</a> */}
                                    {/* <FilterLink lang={lang} query={query} order={order} sort={sort} name={item} /> */}
                                    {selected ? <span>{item}</span> : <FilterLink 
                                        {...querys}
                                        lang={item}
                                        name={item} />}
                                    
                                </List.Item>
                            )
                        }}
                     />
                     <List
                        bordered
                        header={<span className="list-header">Sort</span>}
                        dataSource={SORT_TYPES}
                        renderItem={item=>{

                            let selected = false
                            if(item.name === 'Best Match' && !sort) {
                                selected = true
                            } else if (item.value === sort && item.order === order) {
                                selected = true
                            } else {
                                selected = false
                            }
                            return (
                                <List.Item style={selected ? selectedItemStyle : null}>                                    
                                    {/* <a href="#" onClick={()=> doSearch({
                                        lang, query, sort: item.value || '', order: item.order || ''
                                    })}>{item.name}</a> */}
                                    {
                                        selected ? <span>{item.name}</span> : (<FilterLink 
                                        {...querys}
                                        sort={item.value}
                                        order={item.order}
                                        name={item.name} />
                                    )}
                                    
                                </List.Item>
                            )
                        }}
                      />
                </Col>
                <Col span={18}>
                    <h3 className="repos-title">{repos.total_count} 个仓库</h3>
                    {
                        repos.items.map(repo => <Repo key={repo.id} repo={repo} />)
                    }
                    <div className="pagenation">
                        <Pagination
                            pageSize={per_page}
                            current={Number(page) || 1}
                            total={1000}
                            onChange={noop}
                            itemRender={(page, type, ol)=>{
                                const p = type === 'page' ? page : type === 'prev' ? page - 1 : page + 1
                                const name = type === 'page' ?  page : ol
                                return <FilterLink {...querys} page={p} name={name} />
                            }}
                         />
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .root {
                    padding: 20px 0;

                }
                .list-header {
                    font-weight: 800;
                    font-size: 16px;
                }
                .repos-title {
                    border-bottom: 1px solid #eee;
                    font-size: 24px;
                    line-height: 50px;
                }
                .pagenation {
                    padding: 20px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

Search.getInitialProps = async ({ ctx }) => {
    const { query, sort, lang, order, page } = ctx.query

    if (!query) {
        return {
            repos: {
                total_count: 0
            }
        }
    }

    // ?q=react+language:javascript&sort=starts&order=desc&page=2

    let queryString = `?q=${query}`

    if (lang) queryString += `+language:${lang}`
    if (sort) queryString += `&sort=${sort}&order=${order || 'desc'}`
    if (page) queryString += `&page=${page}`
    
    queryString += '&per_page=${per_page}'

    const result = await api.request({
        url: `/search/repositories${queryString}`,
    }, ctx.req, ctx.res)

    return {
        repos: result.data 
    }

}

export default withRouter(Search)