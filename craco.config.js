module.exports = function ({ env }) {
  return {
    devServer: {
      open: false,
      proxy: [
        {
          context: ['/api/', '/admin/', '/static/'],
          target: 'http://localhost:8000/',
        },
      ],
    },
  }
}