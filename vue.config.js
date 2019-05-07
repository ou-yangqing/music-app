module.exports = {
    configureWebpack: {
        devServer: {
        	proxy: {
                "/api": {
                    target: "https://c.y.qq.com/",
                    pathRewrite: {"^/api": ""},
                    changeOrigin: true
                }
            }
        }
    }
}
