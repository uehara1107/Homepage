module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Homepage/'   //任意
    : '/',
  outputDir: 'docs',
  assetsDir: './',
  publicPath: './',
  configureWebpack: {
    devServer: {
      watchOptions: {
        poll: true,
        ignored: /node_modules/
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
