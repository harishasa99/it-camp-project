var a;
var b;
var fizz = 0;
var buzz = 0;
var fizz_buzz = 0;
document.getElementById("btn").addEventListener("click", function () {
  a = +document.getElementById("prvibr").value;
  b = +document.getElementById("drugibr").value;

  if (a < b) {
    for (var i = a; i <= b; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz buzz", i);
        fizz_buzz++;
      } else if (i % 3 === 0) {
        console.log("Fizz", i);
        fizz++;
      } else if (i % 5 === 0) {
        console.log("Buzz", i);
        buzz++;
      }
    }
  } else if (a > b) {
    for (var i = b; i <= a; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz buzz", i);
        fizz_buzz++;
      } else if (i % 3 === 0) {
        console.log("Fizz", i);
        fizz++;
      } else if (i % 5 === 0) {
        console.log("Buzz", i);
        buzz++;
      }
    }
  }
  document.getElementById("fizz").textContent = fizz;
  document.getElementById("buzz").textContent = buzz;
  document.getElementById("fizz-buzz").textContent = fizz_buzz;
});
