let publicPath = '/'

if (process.env.NODE_ENV === 'ghpages') {
  publicPath = '/Anime-Music-Quiz/'
}
else if (process.env.NODE_ENV === 'production') {
  publicPath = './'
}

module.exports = {
  publicPath: publicPath,
  transpileDependencies: [
    "vuetify"
  ]
}
