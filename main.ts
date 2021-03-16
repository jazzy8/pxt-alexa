input.onSound(DetectedSound.Loud, function () {
    minks = 40
    strip.showColor(neopixel.rgb(0, 213, 255))
    range = strip.range(3, 6)
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P8, 1)
})
let range: neopixel.Strip = null
let minks = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
pins.digitalWritePin(DigitalPin.P8, 0)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P8, 1)
