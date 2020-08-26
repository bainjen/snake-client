const net = require('net');
const { uptime } = require('process');

const connect = function () {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(`server says: `, data);
  });

  conn.on('connect', () => {
    console.log("New client connected!");
    conn.write("Name: LOL");
    // const up = conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
    // setInterval(() => {
    //   conn.write("Move: up");
    //   conn.write("Move: left");
    //   conn.write("Move: down");
    //   conn.write("Move: right");
    // }, 1000); 
  });

  
  return conn;
}

module.exports = snakeExports = { connect }; 