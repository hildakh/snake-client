const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
connect();

setupInput();
/**
 * Establishes connection with the game server
 */
// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   const handleUserInput = function (cb) {
//     stdin.on('data', data => {
//       cb(data)
//     })
//   }
//   return handleUserInput;
// }

console.log('Connecting ...');
let conn = connect();
// const handler = setupInput()

// handler(input => {
//       if (input === "w") {
//         console.log("up")
//         conn.write("Move: up");
//       }
//       if (input === 's') {
//         conn.write("Move: down");
//       }
//       if (input === 'a') {
//         conn.write("Move: left");
//       }
//       if (input === 'd') {
//       conn.write("Move: right");
//       }
//       if(input === '\u0003')
//       process.exit();
//     })
