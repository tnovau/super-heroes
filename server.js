import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import httpProxyMiddleware from "http-proxy-middleware";
import sslRedirect from 'heroku-ssl-redirect';

import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const clientBuildPath = './client/build'
const port = process.env.PORT || 3000;

const app = express();

if (process.env.IS_HEROKU)
  app.use(sslRedirect())

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

app.get('*', (_req, res) => {
  const clientPath = clientBuildPath.replace('.','');
  const file = join(`${__dirname}${clientPath}/index.html`);
  res.sendFile(file);
});

app.listen(port, () => {
  console.log(`App running in port: ${port}`);
});
