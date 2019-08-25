const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const { sitemap_en } = require('./sitemap');

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

  server.get('/documentation/sitemap.xml', (req, res) => {
    res.set('Content-Type', 'text/xml');

    const buildUrl = url => {
      return `<url>
          <loc>https://pixelplux.com/documentation/${url.path}</loc>
          <lastmod>2019-09-10</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
       </url>`;
    };

    return res.send(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${sitemap_en.map(url => buildUrl(url)).join('')}
    </urlset> 
    `);
  });

  server.get('/documentation/:id', (req, res) => {
    return app.render(req, res, '/documentation', { ...query(req) });
  });

  server.get('*', (req, res) => {
    return app.render(req, res, req.url, { ...query(req) });
  });

  const PORT = process.env.PORT || 5001;
  server.listen(PORT, err => {
    if (err) throw err;
    console.log('> Server rodando em http://localhost:' + PORT);
  });
});
