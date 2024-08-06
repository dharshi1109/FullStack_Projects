const net = require('net');

// Create a client socket
const client = new net.Socket();

// Connect to the server
client.connect(3000, 'localhost', () => {
  console.log('Connected to server');

  // Event listener for data received from server
  client.on('data', (data) => {
    console.log('Server says:', data.toString());
  });

  // Event listener for client connection closed
  client.on('close', () => {
    console.log('Connection closed');
  });
});

// Event listener for client error
client.on('error', (err) => {
  console.error('Client error:', err.message);
});

// Event listener for reading input from command line
process.stdin.on('data', (data) => {
  // Send input data to server
  client.write(data.toString().trim());
});
