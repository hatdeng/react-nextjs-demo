import Axios from "axios"

function Detail () {
    return (<span>Detail page</span>)
}

Detail.getInitialProps = () => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve({})
        }, 2000)
    })
}

/*  
Page.getInitialProps = async ctx => {
    const res = await getch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()

    return { stars: json.stargazers_count }
}
*/

export default Detail