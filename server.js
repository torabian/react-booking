const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  const query = req => ({
    'accept-lang': req.headers['accept-lang'] || 'pl',
    baseUrl: req.baseUrl,
    id: req.params.id
  });

  server.get('/book/:id', (req, res) => {
    return app.render(req, res, '/index', { ...query(req) });
  });

  server.get('*', (req, res) => {
    return app.render(req, res, req.url, { ...query(req) });
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log('> Server rodando em http://localhost:' + PORT);
  });
});
