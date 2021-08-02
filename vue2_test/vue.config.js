module.exports = {
    //开启代理服务器方式一
    /*devServer: {
        proxy: 'http://localhost:8081'
    },*/
    //开启代理服务器方式二
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8082',
                pathRewrite:{'^/api':''},
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: 'http://localhost:8081',
                pathRewrite:{'^/foo':''},
                ws: true,
                changeOrigin: true
            }
        }
    }
}