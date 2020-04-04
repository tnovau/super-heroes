const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api/marvel',
    createProxyMiddleware({
      target: 'https://gateway.marvel.com',
      changeOrigin: true,
      pathRewrite: { "^/api/marvel": "/v1/public" },
      logLevel: "debug",
      onProxyReq: (proxyReq, _req, _res) => {
        proxyReq.path += `?apikey=${process.env.REACT_APP_MARVEL_API_KEY}`
      }
    })
  );
};
