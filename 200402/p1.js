process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
  var s = inputData.toString();
  console.log(s);
});
