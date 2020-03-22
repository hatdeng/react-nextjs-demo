const webpack = require('webpack')
const withCss = require('@zeit/next-css')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const Config = require('./config')

const configs = {
    //编译文本的输出目录
    distDir: 'dist',
    //是否给每个页面生成Etag
    generateEtags: true,
    // 页面内容缓存配置 开发过程中
    onDemandEntries: {
        //内容在内存中缓存的时长（ms
        maxInactiveage: 25 * 1000,
        // 同时缓存多少个页面
        pagesBufferLength: 2,
    },
    //在pages目录下的那种后缀的文件会被认为是页面
    pageExtensions: ['jsx', 'js'],
    //配置buildID， 铜项目多个节点配置在用
    generateBuildId: async ()=> {
        if(process.env.YOUR_BUILD_ID) {
            return process.env.YOUR_BUILD_ID
        }

        // 返回null使用默认的unique id 
        return null
    },
    //手动修改webpack config
    webpack(config, options) {
        return config
    },
    //修改webpackDevMiddleware配置
    webpackDevMiddleware: config => {
        return config
    },

    // 可以在页面上通过process.evn.coutomKey获取value
    env: {
        customKey: 'value',
    },

    //下面两个要通过 'next/config' 来读取
    // 只有在服务器渲染时才会获取的配置

    serverRuntimeConfig: {
        mySecret: 'secret',
        secondSecred: process.env.SECOND_SECRET,
    },
    // 在服务器渲染和客户端渲染都可获取的配置
    publicRuntimeConfig: {
        staticFolder: '/static',
    },

}

if(typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}
module.exports = withBundleAnalyzer(withCss({
    env: {
        customKey: 'value',
    },
    serverRuntimeConfig: {
        mySecret: 'secret',
        secondSecred: process.env.SECOND_SECRET,
    },
    // 在服务器渲染和客户端渲染都可获取的配置

    //https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
    webpack(config) {
        config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
        return config
    },
    publicRuntimeConfig: {
        staticFolder: '/static',
        GITHUB_OAUTH_URL: Config.GITHUB_OAUTH_URL,
        OAUTH_URL: Config.OAUTH_URL
    },
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            AnalyzerMode: 'static',
            reportFilename: '../bundles/server.html'
        },
        browser: {
            AnalyzerMode: 'static',
            reportFilename: '../bundles/client.html'
        }
    }
}))