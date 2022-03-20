let strip: neopixel.Strip = null
for (let index = 0; index < 5; index++) {
    k_Bit.Led(COLOR.blue)
    k_Bit.LED_brightness(125)
    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 100)
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 50)
    basic.pause(500)
    k_Bit.Led(COLOR.red)
    k_Bit.LED_brightness(125)
    k_Bit.Motor(MotorObs.LeftSide, MotorDir.Forward, 50)
    k_Bit.Motor(MotorObs.RightSide, MotorDir.Forward, 100)
    basic.pause(500)
}
k_Bit.LED_brightness(0)
k_Bit.carStop()
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P5, 32, NeoPixelMode.RGB)
    strip.clear()
})
