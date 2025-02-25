const { connect, disconnect } = require('mpp-node');
const fs = require('fs');

var output = "";

//to Connect and Disconnect 
connect()
disconnect()

//To Run asynchronously and fetch output an dprint out example

// (async () => {
//   try {
//     const connection = await connect();
//     console.log('Waiting for 10 seconds');

//     setTimeout(() => {
//       output = connection.getOutput();
//       console.log(output);
//     }, 5000);

//     setTimeout(async () => {
//       console.log('Running disconnect after 10 seconds');
//       await disconnect();
//       console.log('Disconnected');
//     }, 10000);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//   }
// })();
