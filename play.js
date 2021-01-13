const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
//add conn in wasd module
conn = connect();

setupInput(conn);

// const { connect } = require("./client");
// const { setupInput } = require("./input");

// console.log("Connecting ...");
// conn = connect();
// // console.log(conn);
// setupInput(conn);
