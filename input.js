//this gets set when setupInput is called.
let connection;

const setupInput = function (conn) {
  // done in was movement
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;

  if (key === "\u0003") {
    // CTRL-C character (ETX character) {
    stdout.write("Bye bye!");
    process.exit();
  }

  if (key === "q") {
    console.log("quit");
    process.exit();
  }
  if (key === "w") {
    console.log("up");
    connection.write("Move: up");
  }
  if (key === "s") {
    console.log("down");
    connection.write("Move: down");
  }
  if (key === "a") {
    // console.log("left");
    connection.write("Move: left");
  }
  if (key === "d") {
    // console.log("right");
    connection.write("Move: right");
  }
  if (key === "z") {
    connection.write("Say: WHAZZUP");
  }
  if (key === "x") {
    connection.write("Say: snails!");
  }
  if (key === "e") {
    connection.write("I like turtles");
  }
};

module.exports = { setupInput };

//this gets set when setupInput is called.
// let connection;

// const setupInput = function (conn) {
//   connection = conn;
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);

//   return stdin;
// };

// const handleUserInput = (key) => {
//   if (key === "q") {
//     console.log("quit");
//     process.exit();
//   }
//   if (key === "w") {
//     console.log("up");
//     connection.write("Move: up");
//   }
//   if (key === "s") {
//     console.log("down");
//     connection.write("Move: down");
//   }
//   if (key === "a") {
//     console.log("left");
//     connection.write("Move: left");
//   }
//   if (key === "d") {
//     console.log("right");
//     connection.write("Move: right");
//   }
//   if (key === "z") {
//     connection.write("Say: WHAZZUP");
//   }
//   if (key === "x") {
//     connection.write("Say: snails!");
//   }
//   if (key === "e") {
//     connection.write("I like turtles");
//   }
// };

// setupInput();
// module.exports = { setupInput };
