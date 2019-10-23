const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function (stdin) {
  console.log(IP, PORT);
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', connect => {
    console.log('Successfully connected to game server');
    conn.write("Name: HLD");
   
});

  return conn;
};


module.exports = {connect};
// module.exports = setupInput;

