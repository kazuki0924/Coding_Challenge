// 1,2,...Nの整数の中から隣接しないK個の整数を選ぶ時、最大何個の整数を含める事ができるかを求めて出力してください

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(N) {
  let arrayN = [];
  let i = 1;
  while (i <= N) {
    arrayN.push(i);
    i += 2;
  }
  console.log(arrayN.length);
});
