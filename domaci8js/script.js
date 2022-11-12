var arr = [4, 6, 5, 3, 3, 1];
var maxLength = 1;

for (var i = 0; i < arr.length; i++) {
  var minOfSub = arr[i];
  var maxOfSub = arr[i];

  for (var j = i + 1; j < arr.length; j++) {
    if (arr[j] < minOfSub) minOfSub = arr[j];

    if (maxOfSub - minOfSub <= 1) {
      var currLength = j - i + 1;
    }

    if (maxLength < currLength) maxLength = currLength;
  }
}

console.log(maxLength);
