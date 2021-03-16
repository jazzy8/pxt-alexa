control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MES_ALERT_EVT_VIBRATE, function () {
    plng = true
    soundExpression.giggle.playUntilDone()
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
            play_note_hz_beat(330, music.beat(BeatFraction.Double))
            play_note_hz_beat(494, music.beat(BeatFraction.Half))
            play_note_hz_beat(440, music.beat(BeatFraction.Half))
            play_note_hz_beat(392, music.beat(BeatFraction.Half))
            play_note_hz_beat(330, music.beat(BeatFraction.Half))
            play_note_hz_beat(294, music.beat(BeatFraction.Half))
            play_note_hz_beat(330, music.beat(BeatFraction.Whole))
        }
        play_note_hz_beat(659, music.beat(BeatFraction.Whole))
        play_note_hz_beat(587, music.beat(BeatFraction.Whole))
        play_note_hz_beat(523, music.beat(BeatFraction.Whole))
        play_note_hz_beat(494, music.beat(BeatFraction.Whole))
        levitatepart1()
        play_note_hz_beat(392, music.beat(BeatFraction.Breve))
        levitatepart1()
        play_note_hz_beat(330, music.beat(BeatFraction.Whole))
        play_note_hz_beat(659, music.beat(BeatFraction.Whole))
        play_note_hz_beat(587, music.beat(BeatFraction.Whole))
        play_note_hz_beat(523, music.beat(BeatFraction.Whole))
        play_note_hz_beat(494, music.beat(BeatFraction.Whole))
    }
    for (let index = 0; index < 3; index++) {
        play_note_hz_beat(330, music.beat(BeatFraction.Double))
        play_note_hz_beat(494, music.beat(BeatFraction.Half))
        play_note_hz_beat(440, music.beat(BeatFraction.Half))
        play_note_hz_beat(392, music.beat(BeatFraction.Half))
        play_note_hz_beat(330, music.beat(BeatFraction.Half))
        play_note_hz_beat(294, music.beat(BeatFraction.Half))
        play_note_hz_beat(330, music.beat(BeatFraction.Whole))
    }
    play_note_hz_beat(659, music.beat(BeatFraction.Whole))
    play_note_hz_beat(587, music.beat(BeatFraction.Whole))
    play_note_hz_beat(523, music.beat(BeatFraction.Whole))
    play_note_hz_beat(494, music.beat(BeatFraction.Whole))
    play_note_hz_beat(330, music.beat(BeatFraction.Double))
    play_note_hz_beat(494, music.beat(BeatFraction.Half))
    play_note_hz_beat(440, music.beat(BeatFraction.Half))
    play_note_hz_beat(392, music.beat(BeatFraction.Half))
    play_note_hz_beat(330, music.beat(BeatFraction.Half))
    play_note_hz_beat(294, music.beat(BeatFraction.Half))
    play_note_hz_beat(330, music.beat(BeatFraction.Whole))
    plng = false
})
function play_note_hz_beat (hz: number, beat: number) {
    if (plng) {
        music.playTone(hz, beat)
    }
}
input.onButtonPressed(Button.A, function () {
    alexa()
})
function alexa () {
    music.setVolume(90)
    minks = 40
    strip.showColor(neopixel.rgb(0, 213, 255))
    range = strip.range(3, 6)
    range.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    listener()
    basic.pause(2000)
    strip.clear()
    strip.show()
    music.setVolume(255)
    control.raiseEvent(
    EventBusSource.MICROBIT_ID_IO_P16,
    EventBusValue.MICROBIT_BUTTON_EVT_CLICK
    )
}
input.onSound(DetectedSound.Loud, function () {
    alexa()
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_BUTTON_EVT_CLICK, function () {
    runks = randint(0, 2)
    if (runks == 0) {
        plng = false
        control.raiseEvent(
        EventBusSource.MICROBIT_ID_IO_P16,
        EventBusValue.MES_ALERT_EVT_VIBRATE
        )
    } else if (runks == 1) {
        plng = false
    } else {
        soundExpression.sad.play()
    }
})
function levitatepart1 () {
    play_note_hz_beat(392, music.beat(BeatFraction.Whole))
    play_note_hz_beat(494, music.beat(BeatFraction.Double))
    play_note_hz_beat(440, music.beat(BeatFraction.Half))
    play_note_hz_beat(440, music.beat(BeatFraction.Whole))
    play_note_hz_beat(440, music.beat(BeatFraction.Half))
    play_note_hz_beat(440, music.beat(BeatFraction.Whole))
}
function listener () {
    while (input.soundLevel() > 175) {
        strip.show()
    }
    basic.pause(2000)
    if (input.soundLevel() > 175) {
        listener()
    }
}
let runks = 0
let range: neopixel.Strip = null
let minks = 0
let plng = false
let strip: neopixel.Strip = null
music.setVolume(255)
strip = neopixel.create(DigitalPin.P1, 12, NeoPixelMode.RGB)
input.setSoundThreshold(SoundThreshold.Loud, 175)
strip.clear()
strip.show()
