radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
radio.setGroup(20)
