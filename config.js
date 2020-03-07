const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'
const client_id = '7fcfdaef92ac7d03a0d2'

module.exports = {
    github: {
        request_token_url: 'https://github.com/login/oauth/access_token',
        client_id,
        client_secret: '022440aa2b2eaa59ce5430aa7d61f5e05ca505ee',
    },
    GITHUB_OAUTH_URL,
    OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`
} 

//access_token=65a2b977925f4637e6dcaedcf7abb3c7170b218f&scope=repo%3Astatus%2Cuser&token_type=bearer
