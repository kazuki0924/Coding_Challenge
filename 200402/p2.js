// Xが入力されたとして、Y=3*XでZ=Y+5であった場合のZを出力してください

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(inputData) {
  var x = inputData;
  var y = 3 * x;
  var z = y + 5;
  console.log(z);
});
