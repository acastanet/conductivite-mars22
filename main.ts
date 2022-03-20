input.onButtonPressed(Button.A, function () {
    x = pins.analogReadPin(AnalogPin.P0)
})
let xg = 0
let v = 0
let x = 0
basic.showIcon(IconNames.Confused)
x = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    v = pins.analogReadPin(AnalogPin.P0) - x
    basic.pause(1000)
    if (v >= 0) {
        xg = Math.map(v, 0, 1023 - x, 0, 100)
        led.plotBarGraph(
        Math.round(xg),
        100
        )
    } else {
        led.plotBarGraph(
        0,
        100
        )
    }
})
