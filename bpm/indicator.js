const fs = require('fs')

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

const file = './data/bpm.txt'

var a = 0;
while (true) {
    console.dir(fs.readFileSync(file, "utf8"));
    sleep(500);
}
