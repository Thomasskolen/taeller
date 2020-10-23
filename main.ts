input.onGesture(Gesture.TiltLeft, function () {
    while (tæller > 0) {
        tæller += -1
        basic.pause(1000)
        if (tæller == 0) {
            break;
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    tæller = 5
})
input.onGesture(Gesture.TiltRight, function () {
    while (tæller < 9) {
        tæller += 1
        basic.pause(1000)
    }
})
let tæller = 0
tæller = 3
basic.forever(function () {
    basic.showNumber(tæller)
})
