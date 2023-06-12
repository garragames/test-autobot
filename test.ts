/*
 * Auto Bot Test
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 */

input.onButtonPressed(Button.A, function () {
    autoBot.setSeatbelt(autoBot.BeltStates.Fasten)
    autoBot.setManualGear(autoBot.ManualGears.Neutral)
    autoBot.turnDirection(autoBot.Directions.Front)
    autoBot.setEngine(autoBot.Engine.On)
    autoBot.setManualGear(autoBot.ManualGears.First)
    autoBot.move()
})
input.onButtonPressed(Button.B, function () {
    autoBot.stop()
    autoBot.setManualGear(autoBot.ManualGears.Neutral)
    autoBot.setEngine(autoBot.Engine.Off)
    autoBot.setSeatbelt(autoBot.BeltStates.Unfasten)
})
basic.forever(function () {
    if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Stop)) {
        autoBot.stop()
    } else {
        if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Right)) {
            autoBot.setManualGear(autoBot.ManualGears.Second)
            autoBot.turnDirection(autoBot.Directions.Front)
        } else {
            if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Left)) {
                autoBot.turnDirection(autoBot.Directions.Left)
            } else {
                if (autoBot.compare(autoBot.senseLine(), autoBot.Signs.Straight)) {
                    autoBot.turnDirection(autoBot.Directions.Front)
                }
            }
        }
    }
})