import { useState, useCallback, useEffect } from 'react';
import { Avatar, Button, Select, Spin } from 'antd';
import api from '../../lib/api'

import dymanic from 'next/dynamic';

import { getLastUpdated } from '../../lib/utils'

import withRepoBase from '../../components/with-repo-basic'

import SearchUser from '../../components/SearchUser'

const MdRenderer = dymanic(()=> import('../../components/MarkdownRender'))

const CACHE = {}

function IssueDetail ({ issue }) {
    return (
        <div className="root">
           <MdRenderer content={issue.body} /> 
           <div className="actions">
               <Button href={issue.html_url} target="_blank">打开Issue讨论页面</Button>
           </div>
           <style jsx>{`
            .root {
                backgound-color: #fafafa;
                padding: 20px;
            }
            .actions {
                text-align: right;
            }
           `}</style>
        </div>
    )
}


function IssueItem({issue}) {
    const [showDetail, setShowDetail] = useState(false)

    /* const toggleShowDetail = () => {
        setShowDetail(!showDetail)
    } */
    const toggleShowDetail = useCallback(() => {
        setShowDetail(detail => !detail)
    }, [])
    return (
        <div>
            <div className="issue">
                <Button type="primary" size="small" 
                style={{ position: 'absolute', right: 10, top: 10}}
                onClick={toggleShowDetail}
                >{ showDetail ? 'Hide Detail' : 'Show Detail'}</Button>
                <div className="avatar">
                    <Avatar src={issue.user.avatar_url} shape="square" size={50} />
                </div>
                <div className="main-info">
                <h6 className="title">
                    <span>{issue.title}</span>
                    {
                        issue.labels.map(label => <Label label={label} key={label.id} />)
                    }
                </h6> 
                <p className="sub-info">
                    <span>Updated at {getLastUpdated(issue.updated_at)}</span>
                </p>
                </div>
                <style jsx>{`
                    .issue {
                        display: flex;
                        position: relative;
                        padding: 10px;
                    }
                    .issue:hover {
                        background-color: #fafafa;
                    }
                    .issue + .issue {
                        border-top: 1px solid #eee;
                    }
                    .main-info > h6 {
                        max-width: 600px;
                        font-size: 16px;
                        padding-right: 50px;
                    }
                    .avatar {
                        margin-right: 20px;
                    }
                    .sub-info {
                        margin-bottom: 0;
                    }
                    .sub-info > span + span {
                        display: inline-block;
                        margin-left: 20px;
                        font-size: 12px;
                    }
                `}</style>
            </div>
            
            {showDetail ? <IssueDetail issue={issue} /> : null}
        </div>
    )
}

function makeQuery (creator, state, labels) {
    let creatorStr = creator ? `creator=${creator}`: ''
    let stateStr = state ? `state=${state}`: ''
    let labelStr
    if (labels && labels.length > 0) {
        labelStr = `labels=${labels.join(',')}`
    }

    const arr = []
    if(creatorStr) arr.push(creatorStr)
    if(stateStr) arr.push(stateStr)
    if(labelStr) arr.push(labelStr)

    return `?${arr.join('&')}`
    
}

function Label({ label }) {
    return (
        <>
            <span className="label" style={{background: `#${label.color}`}}>{label.name}</span>
            <style>{`
                .label {
                    display: inline-block;
                    line-height: 20px;
                    margin-left: 10px;
                    padding: 3px 10px;
                    border-radius: 3px;
                    font-size: 12px;
                }
            `}</style>
        </>
    )
}

const isServer = typeof window === 'undefined'
const Option = Select.Option

function Issues ({initialIssues, labels, owner, name}) {

    const [creator, setCreator] = useState()
    const [state, setState] = useState()
    const [label, setLabel]= useState([])
    const [issues, setIssues] = useState(initialIssues)

    const [fetching, setFetching] = useState(false)

    useEffect(()=>{
        if(!isServer) {
            CACHE[`${owner}/${name}`] = labels
        }
    },[owner, name, labels])

    const handleCreatorChange = useCallback((value) => {
        setCreator(value)
    }, [])
    const handleStateChange = useCallback((value) => {
        setState(value)
    }, [])
    const handleLabelChange = useCallback((value) => {
        setLabel(value)
    }, [])
    const handleSearch = useCallback(()=> {
        setFetching(true)
        api.request({
            url: `/repos/${owner}/${name}/issues${makeQuery(creator, state, label)}`
            }
        ).then(resp => {
            setIssues(resp.data)
            setFetching(false)
        }).catch(err => {
            console.error(err)
            setFetching(false)
        })
    }, [owner, name, creator, state, label,])
    return (
        <div className="root">
            <div className="search">
                <SearchUser onChange={handleCreatorChange} value={creator} />
                <Select placeholder="状态" onChange={handleStateChange} value={state} style={{width: 200, marginLeft: 20}}>
                    <Option value="all">All</Option>
                    <Option value="open">Open</Option>
                    <Option value="closed">Closed</Option>
                </Select>

                <Select 
                    mode="multiple"
                    placeholder="Label"
                    onChange={handleLabelChange}
                    value={label}
                    style={{flexGrow: 1, width: 200, marginLeft: 20, marginRight: 20}}>
                    {
                        labels.map(la=>(
                            <Option value={la.name} key={la.id}>{la.name}</Option>
                        ))
                    }
                    
                </Select>
                <Button type="primary" disabled={fetching} onClick={handleSearch} style={{ marginLeft: 20}}>Search</Button>
            </div>
            {
                fetching ? <div className="loading"><Spin /></div> : (
                    <div className="issues">
                        {
                            issues.map(issue => <IssueItem issue={issue} key={issue.id} />)
                        }
                    </div>
                )
            }
            
            <style jsx>{`
                .issues {
                    border: 1px solid #eee;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    margin-top: 20px;
                }
                .search {
                    display: flex;

                }
                .loading {
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </div>
    )
}

Issues.getInitialProps = async({ ctx })=>{
    const { owner, name } = ctx.query
    /* const issuesResp = await api.request({
        url: `/repos/${owner}/${name}/issues`
    }, ctx.req, ctx.res)

    const labelsResp = await api.request({
        url: `/repos/${owner}/${name}/labels`
    }, ctx.req, ctx.res)  
    
    return  {
        initialIssues: issuesResp.data,
        labels: labelsResp.data
    }
    */
    const full_name = `${owner}/${name}`
    const fetchs = await Promise.all([
        await api.request({
            url: `/repos/${owner}/${name}/issues`
            },
            ctx.req,
            ctx.res
        ),
        CACHE[full_name] ? 
        Promise.resolve({data: CACHE[full_name]}) : await api.request({
            url: `/repos/${owner}/${name}/labels`
            },
            ctx.req,
            ctx.res
        )
    ])
    return  {
        owner,
        name,
        initialIssues: fetchs[0].data,
        labels: fetchs[1].data
    }
}

export default withRepoBase(Issues, 'issues')