input.onButtonPressed(Button.A, function () {
    gauche.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    gauche.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.AB, function () {
    stop.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    stop.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onButtonPressed(Button.B, function () {
    droite.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    droite.showColor(neopixel.colors(NeoPixelColors.Black))
})
let droite: neopixel.Strip = null
let stop: neopixel.Strip = null
let gauche: neopixel.Strip = null
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
gauche = strip.range(0, 2)
stop = strip.range(0, 5)
droite = strip.range(3, 2)
basic.forever(function () {
	
})
