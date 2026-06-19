import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';
import morgan from 'morgan';

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '..', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'cert.pem')),
};

const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist');

const mimeTypes: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

const server = https.createServer(httpsOptions, (req, res) => {
  morgan('combined')(req, res, () => {
    let url = new URL(req.url ?? '/', 'http://localhost').pathname;
    if (url === '/') url = '/index.html';

    const filePath = path.join(CLIENT_DIST, url);

    if (!filePath.startsWith(CLIENT_DIST)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] ?? 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

const PORT = 4433;
server.listen(PORT, () => {
  console.log(`HTTPS server listening on https://localhost:${PORT}`);
});
