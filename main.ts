input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
radio.setGroup(2)
