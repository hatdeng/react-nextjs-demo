import { useState, useCallback } from 'react'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import { withRouter, Router } from 'next/router'

import axios from 'axios'
import Link from 'next/link'
import { Button, Layout, Icon, Input, Avatar, Tooltip, Dropdown, Menu } from "antd"

const { Header, Content, Footer } = Layout
import Container from './container'
import { logout } from '../store/store'

const { publicRuntimeConfig } = getConfig()
function defaultLayout ({ children, user, logout, router }) {
    const urlQuery = router.query && router.query.query 
    const [search, setSearch] = useState(urlQuery || '')

    const handleSearchChange = useCallback((event)=>{
        setSearch(event.target.value)
    }, [setSearch]) 

    const handleOnSearch = useCallback(()=>{
        router.push(`/search?query=${search}`)
    },[search])
    

    const handleLogout = useCallback(()=>{
        logout()
    },[logout])

    const handleGoToOAuth = useCallback((e)=>{
        e.preventDefault()
        axios.get(`/prepare-auth?url=${router.asPath}`).then(resp => {
            if (resp.status === 200) {
                location.href = publicRuntimeConfig.OAUTH_URL
            } else {
                console.log( 'prepare-auth faild', resp)
            }
        }).catch(err => {
            console.log( 'prepare-auth faild', err)
        })
    }, [])
    const userDropdown = (
        <Menu>
            <Menu.Item>
                <a href="javascript:void(0)" onClick={handleLogout}>Log Out</a>
            </Menu.Item>
        </Menu>
    )
    const githubIconStyle = {
        color: '#ffffff',
        fontSize: 40,
        display: 'block',
        paddingTop: 10,
        marginRight: 10
    }
    const footerStyle = {
        textAlign: 'center',
        color: '#000',
        fontSize: 16,
    }

    const Comp = ({color, children, style}) =>  <div style={{ ...style, color}}>{children}</div>

    return (
        <Layout>
            <Header>
                <Container renderer={<div className="header-container" />}>
                    <div className="logo-scope">
                        <div className="logo">
                        <Link href="/">
                        <a>
                        <Icon type="github" size={40} style={githubIconStyle}></Icon>
                        </a>
                        </Link>
                        </div>
                    </div>
                    <div className="search-form">
                        <Input.Search 
                        placeholder="搜索仓库" 
                        value={search} 
                        onChange={handleSearchChange}
                        onSearch={handleOnSearch}
                        />
                    </div>
                    <div className="header-right">
                        <div className="user">
                        {
                            user && user.id ? (
                                <Dropdown overlay={userDropdown}>
                                <a href="/"><Avatar size={40} src={user.avatar_url}></Avatar></a>
                                </Dropdown>
                            ) : (
                                <Tooltip title="Click to login">
                                <a href={`/prepare-auth?url=${router.asPath}`}>
                                    <Avatar size={40} icon="user"></Avatar>
                                </a>
                                </Tooltip>
                            )
                        }
                        
                        </div>
                    </div>
                </Container>
            </Header>
            <Content>
               {/* <Container renderer={<Comp color="#ff0000" style={{ fontSize: 40 }} />}>{children}</Container> */}
                <Container>{children}</Container>
            </Content> 
            <Footer style={footerStyle}>Develop by Harry @ <a href="mialto:harry@gmail.com">harry@gmail.com</a></Footer>
            <style jsx>{`
                .header-container {
                    display: flex;
                    justify-content: space-between;
                }
                .logo-scope {
                    display: flex;
                    justify-content: flex-start;
                }
            `}</style>
            <style jsx global>{`
                #__next {
                    height: 100%;
                }
                .ant-layout {
                    min-height: 100%;
                }
                .content {
                    color: #ff0000;
                }
                .ant-layout-header {
                    padding-left: 0;
                    padding-right: 0;
                }
                .ant-layout-content {
                    backgorund-color: #fff;
                }
            `}</style>
        </Layout>
    )
}

export default connect(function mapState(state) {
    return {
        user: state.user,
    }
}, function mapReducer(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
})( withRouter(defaultLayout) )

/* export default ({ children }) => (
    <>
    <header>
        <Link href="/">
            <a>
            <Button className="primary">go to HomePage</Button>
            </a>
        </Link>
        <Link href="/a?id=10000" as="/a/10000">
            <a>
            <Button className="primary">go to AAA</Button>
            </a>
        </Link>
        <Link href="/test/b">
            <a>
            <Button className="primary">go to BBB</Button>
            </a>
        </Link>
    </header>
    
    {children}
    <footer>footer</footer>
    </>
) */