import withRepoBase from '../../components/with-repo-basic'
function Issues ({text}) {
    return <span>Issues Index {text}</span>
}

Issues.getInitialProps = async()=>{
    return  {
        text: 456
    }
}

export default withRepoBase(Issues, 'issues')