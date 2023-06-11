autoBot.test()
autoBot.turnDirection(autoBot.Directions.Front)
basic.forever(function () {
    if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Stop)) {
        autoBot.setManualGear(autoBot.ManualGears.Neutral)
        autoBot.turnDirection(autoBot.Directions.Left)
    }
})
