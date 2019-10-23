const net = require('net');

// const setupInput = function() {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   return stdin;

// }

const connect = function (stdin) {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', connect => {
    console.log('Successfully connected to game server');
    conn.write("Name: HLD");

});
  //     if(data === '\u0003')
  //     process.exit();
  //   })

  // })

  return conn;
};


module.exports = connect;
// module.exports = setupInput;

