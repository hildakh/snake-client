const net = require('net');
const stdin = process.stdin



const connect = function () {
  const conn = net.createConnection({
    host: '192.168.88.149',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');



  conn.on('connect', connect => {
    console.log('Successfully connected to game server');
    conn.write("Name: HLD");
    
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
  
  

    stdin.on('data', data => {
      console.log("Data: ",data)
      if (data === "w") {
        console.log("up")
        conn.write("Move: up");
      }
      if (data === 's') {
        conn.write("Move: down");
      }
      if (data === 'a') {
        conn.write("Move: left");
      }
      if (data === 'd') {
      conn.write("Move: right");
      }
      if(data === '\u0003')
      process.exit();
    })

  })

  return conn;
}

module.exports = connect;

