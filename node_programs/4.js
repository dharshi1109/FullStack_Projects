const http = require('http');
const server = http.createServer((req, res) => {
  if (req.headers.cookie) {
    console.log('Cookies:', req.headers.cookie);
  } else {
    console.log('No cookies found in the request headers');
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
