// server.js
const next = require('next');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);

const express = require('express');

app.prepare().then(() => {
  const server = express();

  if (process.env.NODE_ENV === 'production') {
    server.get(/^\/static\//, (_, res, nextHandler) => {
      res.setHeader(
        'Cache-Control',
        'public, max-age=180, s-maxage=86400, immutable'
      );
      nextHandler();
    });
  }

  server.use(handler).listen(3000);
});

// Cache-Control: max-age=180, s-maxage=86400

// /static/
