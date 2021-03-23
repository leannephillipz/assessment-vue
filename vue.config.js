module.exports = {
  publicPath: '/', // path is dependent on directory on live server
  assetsDir: 'assets',
  css: {
    sourceMap: true
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}


//doesn't work
