import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import expressHttpToHttps from 'express-http-to-https';
import httpProxyMiddleware from "http-proxy-middleware";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const clientBuildPath = './client/build'
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(clientBuildPath));
const IGNORE_HOSTS = [/localhost:(\d{4})/];
const REDIRECT_STATUS_CODE = 301;
app.use(expressHttpToHttps.redirectToHTTPS(IGNORE_HOSTS, [], REDIRECT_STATUS_CODE));
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

app.get('*', (_req, res) => {
  const clientPath = clientBuildPath.replace('.','');
  const file = join(`${__dirname}${clientPath}/index.html`);
  res.sendFile(file);
});

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});
