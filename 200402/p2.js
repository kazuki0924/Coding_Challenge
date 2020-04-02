process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
  var x = inputData;
  var y = 3 * x;
  var z = y + 5;
  console.log(z);
});
