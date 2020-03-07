import { cloneElement } from 'react'
const style = {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
    paddingLeft: 20,
    paddingRight: 20,
}
export default ( {children, renderer=<div />} )=>{
    return cloneElement(renderer, {
        style: Object.assign({}, renderer.props.style, style),
        children
    })
    //return <Comp style={style}>{children}</Comp>
}