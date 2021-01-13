// docs https://nodejs.org/api/net.html#net_net_createconnection
//https://nodejs.org/api/events.html#events_event_newlistener

// const net = require("net");
// const { IP, PORT } = require("./constants");
// const { uptime } = require("process");

const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.86.69",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SNK");

    // exp 1
    // conn.write("Move: up");

    // exp 2
    // conn.write("Move: up");
    // conn.write("Move: right");

    // exp 3 => each timeout happens once
    // conn.write("Move: up");
    // setTimeout(function () {
    //   conn.write("Move: left");
    // }, 1000);
    // setTimeout(function () {
    //   conn.write("Move: down");
    // }, 2000);

    //exp 4 => each interval happens repeatedly
    // conn.write("Move: up");
    // setInterval(function () {
    //   conn.write("Move: left");
    // }, 1000);
    // setInterval(function () {
    //   conn.write("Move: down");
    // }, 2000);
  });

  return conn;
};

module.exports = { connect };

// const net = require("net");
// const { IP, PORT } = require("./constants");
// const { uptime } = require("process");

// const connect = function () {
//   const conn = net.createConnection({
//     host: IP,
//     port: PORT,
//   });
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log("New client connected!");
//     conn.write("Name: LOL");
//   });

//   conn.on("data", (data) => {
//     console.log(`server says: `, data);
//   });

//   return conn;
// };

// module.exports = snakeExports = { connect };

// //updated Jan 2021
// const net = require("net");

// /**
//  * Establishes connection with the game server
//  */
// const connect = function () {
//   const conn = net.createConnection({
//     host: "<IP ADDRESS HERE>",
//     port: 50541,
//   });
//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();
