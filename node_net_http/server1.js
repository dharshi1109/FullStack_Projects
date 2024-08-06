const net = require('net');

// Array to store connected clients
const clients = [];

// Create a server using net module
const server = net.createServer();

// Event listener for new client connections
server.on('connection', (client) => {
  console.log('Client connected:', client.remoteAddress, client.remotePort);
  
  // Add client to the list of connected clients
  clients.push(client);

  // Event listener for data received from clients
  client.on('data', (data) => {
    // Broadcast message to all connected clients except the sender
    clients.forEach((c) => {
      if (c !== client) {
        c.write(`Client ${client.remoteAddress}:${client.remotePort} says: ${data}`);
      }
    });
  });

  // Event listener for client disconnection
  client.on('end', () => {
    console.log('Client disconnected:', client.remoteAddress, client.remotePort);
    
    // Remove client from the list of connected clients
    const index = clients.indexOf(client);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });

  // Event listener for errors
  client.on('error', (err) => {
    console.error('Client error:', err.message);
  });
});

// Event listener for server error
server.on('error', (err) => {
  console.error('Server error:', err.message);
});

// Start the server and make it listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
