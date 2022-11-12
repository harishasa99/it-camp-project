var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var k = 2;

for (var i = 0; i < arr.length - 1; i++) {
  for (var j = i + 1; j < arr.length; j++) {
    if ((arr[i] + arr[j]) % k === 0) {
      console.log(i, j);
    }
  }
}
