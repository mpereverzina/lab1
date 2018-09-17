var inp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2,
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

let t1 = 0
let t2 = 0
let led_state = false
let raw = 0
let M_avg = 0
let bpm = 0
let i = 0
//M_avg = pins.analogReadPin(AnalogPin.P0)
M_avg = inp[i];
while (true) {
//    raw = pins.analogReadPin(AnalogPin.P0)
    i++;
    if (i === inp.length) {
        break;
    }
  raw = inp[i];
    M_avg = 200 * raw / 1000 + 800 * M_avg / 1000
    if (raw >= M_avg) {
        if (led_state == false) {
//            led.plot(0, 0)
            led_state = true
//            t2 = input.runningTime()
            t2 = new Date();
            bpm = 60 * 1000 * 1000 / ((t2 - t1) * 1000)
            t1 = t2
        }
    } else {
        if (led_state == true) {
//          led.unplot(0, 0)
            led_state = false
        }
    }
//    serial.writeLine("" + raw.toString() + " " + M_avg.toString() + " " + bpm.toString())
//    basic.pause(20)

    console.log ("" + raw.toString() + " " + M_avg.toString() + " " + bpm.toString())

//    sleep(200);
}
