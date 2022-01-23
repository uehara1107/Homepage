module.exports = {
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
