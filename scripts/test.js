var inp = [3, 5, 4, 6, 8, 22, 1, 40, 7, 4, -7];
var max = inp [0];
for (var i = 1; i < inp.length; i++) {
	if (inp [i] > max) {
	    max = inp [i];
	}
}
console.log('max is ' + max)

