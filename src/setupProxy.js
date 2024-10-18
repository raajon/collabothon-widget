const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/branches-api',
    legacyCreateProxyMiddleware({
      target: 'https://api-sandbox.commerzbank.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/parse',
    legacyCreateProxyMiddleware({
      target: 'https://www.polarny.it',
      changeOrigin: true,
    })
  );
};