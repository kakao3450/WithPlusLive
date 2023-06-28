const { createProxyMiddleware } = require("http-proxy-middleware");

const environment = process.env.NODE_ENV;

module.exports = function (app) {
  app.use(
    "/account",
    createProxyMiddleware({
      target: "https://www.withplus.live",
      changeOrigin: true,
    })
  );

  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.withplus.live",
      changeOrigin: true,
    })
  );
};
