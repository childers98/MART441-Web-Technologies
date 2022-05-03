function processData (callback) {
  fetchData(function (err, data) {
    if (err) {
      console.log("An error has occurred. Abort everything!");
      return callback(err);
    }
    data += 1;
    callback(data);
  });
}


//website explanation
//https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/
// function asyncOperation ( a, b, c, callback ) {
//   // ... lots of hard work ...
//   if ( /* an error occurs */ ) {
//     return callback(new Error("An error has occurred"));
//   }
//   // ... more work ...
//   callback(null, d, e, f);
// }
//
// asyncOperation ( params.., function ( err, returnValues.. ) {
//   //This code gets run after the async operation gets run
// });
