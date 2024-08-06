const http = require('http');
const url = require('url');

// Create a server using http module
const server = http.createServer((req, res) => {
  // Parse the URL to extract query parameters
  const parsedUrl = url.parse(req.url, true);

  // Check if the request method is POST and the path is '/count'
  if (req.method === 'POST' && parsedUrl.pathname === '/count') {
    let data = '';

    // Event listener for receiving data from the client
    req.on('data', (chunk) => {
      data += chunk;
    });

    // Event listener for end of data stream from the client
    req.on('end', () => {
      // Count words and characters in the received message
      const wordCount = data.trim().split(/\s+/).length;
      const charCount = data.trim().length;

      // Send the word and character count as response to the client
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Word count: ${wordCount}, Character count: ${charCount}`);
    });
  } else {
    // If the request method or path is not as expected, send a 404 Not Found response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Start the server and make it listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
