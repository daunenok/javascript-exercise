var sum = 0;
for (var i = 1; i < 1000; i++) {
	if (!(i % 3 && i % 5))
		sum += i;
}
var pfirst = document.querySelector("p.first");
pfirst.textContent = sum;

var num1 = 1;
var num2 = 2;
var fib = 2;
var sum2 = 2; 
while (fib <= 4000000) {
	fib = num2 + num1;
	num1 = num2;
	num2 = fib;
	if (!(fib % 2)) {
		sum2 += fib;
	}
}
var psecond = document.querySelector("p.second");
psecond.textContent = sum2;


