const jsonfile = require('jsonfile')

var inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

var delta = 0.1;

var localMaximumIndexes = [];

var i = 0;

while (true) {

    if (i > 0 && inp[i] > inp[i+1] && inp[i] > inp[i-1]) {
        localMaximumIndexes.push (i);

    }
    i++;
    if (i == inp.length){
        break;
    }
}

var bpm = [];

var time = [];

const file = './data/bpm.txt'

for (var i = 1; i < localMaximumIndexes.length; i++) {
    var interval = (localMaximumIndexes[i] - localMaximumIndexes[i - 1]) * delta;
    var currentBpm = 1/interval * 60;
    var currentTime = localMaximumIndexes[i] * delta
    bpm.push({'time' : currentTime, 'bpm' : currentBpm});

    jsonfile.writeFile(file, currentBpm, function (err) {
        if (err) console.error(err)
    })

    sleep(200);
}

console.log (bpm);
