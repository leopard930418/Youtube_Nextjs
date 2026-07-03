const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');

const DEFAULT_PORT = 8000;
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

function getPort(argv = process.argv, env = process.env) {
  const portArg = argv.find((arg) => arg.startsWith('--port='));
  const value = portArg ? portArg.slice('--port='.length) : env.PORT;
  const port = Number.parseInt(value || DEFAULT_PORT, 10);

  return Number.isInteger(port) && port > 0 && port <= 65535 ? port : DEFAULT_PORT;
}

function sendText(response, statusCode, text) {
  response.writeHead(statusCode, {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  response.end(text);
}

function resolveRequestPath(root, requestUrl) {
  const parsedUrl = new URL(requestUrl, 'http://localhost');
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const safePath = path.normalize(decodedPath).replace(/^([/\\])+/, '');
  const requestedPath = path.resolve(root, safePath);

  if (!requestedPath.startsWith(root)) {
    return null;
  }

  return requestedPath;
}

function pickFilePath(root, requestedPath) {
  if (!requestedPath) return null;

  if (fs.existsSync(requestedPath) && fs.statSync(requestedPath).isDirectory()) {
    return path.join(requestedPath, 'index.html');
  }

  if (fs.existsSync(requestedPath)) {
    return requestedPath;
  }

  if (!path.extname(requestedPath)) {
    const htmlPath = `${requestedPath}.html`;
    if (fs.existsSync(htmlPath)) {
      return htmlPath;
    }
  }

  return path.join(root, '404.html');
}

function createStaticServer(options = {}) {
  const root = path.resolve(options.root || __dirname);

  return http.createServer((request, response) => {
    const requestedPath = resolveRequestPath(root, request.url || '/');
    const filePath = pickFilePath(root, requestedPath);

    if (!requestedPath) {
      sendText(response, 403, 'Forbidden');
      return;
    }

    if (!filePath || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      sendText(response, 404, 'Page not found');
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[extension] || 'application/octet-stream';
    const statusCode = path.basename(filePath) === '404.html' ? 404 : 200;

    response.writeHead(statusCode, {
      'Content-Type': contentType,
      'Cache-Control': 'no-store'
    });

    fs.createReadStream(filePath).pipe(response);
  });
}

if (require.main === module) {
  const port = getPort();
  const server = createStaticServer();

  server.listen(port, '127.0.0.1', () => {
    console.log(`Localhost server is running at http://localhost:${port}/`);
    console.log('Press Ctrl+C to stop the server.');
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Try another port, for example:`);
      console.error('node localhost-server.js --port=8080');
    } else {
      console.error(error.message);
    }
    process.exit(1);
  });
}

module.exports = {
  createStaticServer,
  getPort
};
