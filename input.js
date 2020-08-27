//this gets set when setupInput is called. 
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);

  return stdin;
};

const handleUserInput = (key) => {
  if (key === 'q') {
    console.log('quit');
    process.exit();
  }
  if (key === 'w') {
    console.log('up');
    connection.write("Move: up");
  }
  if (key === 's') {
    console.log('down');
    connection.write("Move: down");
  }
  if (key === 'a') {
    console.log('left');
    connection.write("Move: left");
  }
  if (key === 'd') {
    console.log('right');
    connection.write("Move: right");
  }
  if (key === 'z') {
    connection.write("Say: WHAZZUP");
  }
  if (key === 'x') {
    connection.write("Say: snails!");
}
};


setupInput();
module.exports = { setupInput };