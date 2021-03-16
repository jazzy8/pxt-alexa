function doSomething () {
    monks = input.soundLevel()
    if (olds != monks) {
        olds = monks
        strip.showColor(neopixel.rgb(0, 213, 255))
        if (monks < 128) {
            minks = minks - 1
        } else {
            minks = 40
            if (input.soundLevel() > 240) {
                range = strip.range(0, 12)
            } else if (input.soundLevel() > 215) {
                range = strip.range(1, 11)
            } else if (input.soundLevel() > 193) {
                range = strip.range(2, 10)
            } else if (input.soundLevel() > 177) {
                range = strip.range(3, 9)
            } else if (input.soundLevel() > 140) {
                range = strip.range(4, 8)
            } else if (input.soundLevel() > 128) {
                range = strip.range(5, 7)
            } else {
                range = strip.range(5, 7)
            }
            range.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    }
}
input.onSound(DetectedSound.Loud, function () {
    minks = 40
    for (let index = 0; index < 100; index++) {
        doSomething()
    }
    strip.clear()
})
let range: neopixel.Strip = null
let minks = 0
let olds = 0
let monks = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
strip.clear()
