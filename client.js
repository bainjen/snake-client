const net = require('net');
const { uptime } = require('process');

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  
  conn.on('connect', () => {
    console.log("New client connected!");
    conn.write("Name: LOL");
  });

  conn.on('data', (data) => {
    console.log(`server says: `, data);
  });
  
  return conn;
}

module.exports = snakeExports = { connect }; 