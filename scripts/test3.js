var inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

var delta = 0.1;

var localMaximumIndexes = [];

for (var i = 0; i < inp.length - 1; i++) {

    if (i > 0 && inp[i] > inp[i+1] && inp[i] > inp[i-1]) {
        localMaximumIndexes.push (i);

    }
}
console.log (localMaximumIndexes);


var bpm = [];

var time = [];

for (var i = 1; i < localMaximumIndexes.length; i++){

        var interval = (localMaximumIndexes[i] - localMaximumIndexes[i-1]) * delta;
        var b = 1/interval * 60;
        var t = localMaximumIndexes[i]*delta
        bpm.push({'time' : t, 'bpm' : b});

}

console.log (bpm);