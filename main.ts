let Ángulo = 0
basic.forever(function () {
    Ángulo = input.compassHeading()
    if (Ángulo > 315 && Ángulo <= 360 || Ángulo >= 0 && Ángulo <= 45) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (Ángulo > 45 && Ángulo <= 115 || false) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            # . . . .
            # # # # #
            `)
    } else if (Ángulo > 135 && Ángulo <= 225) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (false) {
    	
    }
})
