const { connect } = require('./client');
const { setupInput } = require('./input');


console.log('Connecting ...');
conn = connect();
// console.log(conn);
setupInput(conn);
