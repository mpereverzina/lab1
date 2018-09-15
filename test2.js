var inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

var delta = 0.1;

var averageIndexes = [];

var average = 5;

for (var i = 0; i < inp.length; i++) {

    if (inp[i] === average){
        averageIndexes.push (i);

    }
}


var bpm = [];

var time = [];

for (var i = 2; i < averageIndexes.length; i += 2){


        var interval = (averageIndexes[i] - averageIndexes[i-2]) * delta;
        var b = 1/interval * 60;
        var t = averageIndexes[i]*delta
        bpm.push({'time' : t, 'bpm' : b});

}

console.log (bpm);