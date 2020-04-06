import express from "express";
import httpProxyMiddleware from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const clientBuildPath = './client/build'
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(clientBuildPath));
app.use(
  '/api/marvel',
  httpProxyMiddleware.createProxyMiddleware({
    target: 'https://gateway.marvel.com',
    changeOrigin: true,
    pathRewrite: { "^/api/marvel": "/v1/public" },
    logLevel: "debug",
    onProxyReq: (proxyReq, _req, _res) => {
      proxyReq.path += `?apikey=${process.env.REACT_APP_MARVEL_API_KEY}`
    }
  })
);

app.get('/', (_req, res) => {
  res.sendFile(clientBuildPath, 'index.html');
});

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});
