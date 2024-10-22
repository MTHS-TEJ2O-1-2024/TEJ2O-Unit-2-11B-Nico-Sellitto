/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nico Sellitto
 * Created on: Oct 2024
 * This program compares two numbers
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
let number1 = randint(0, 99)
let number2 = randint(0, 99)

// shows number1
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showString('#1:' + number1)
    basic.showIcon(IconNames.Happy)
})

// shows number2
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2:' + number2)
    basic.showIcon(IconNames.Happy)
})

//Compares the 2 numbers
input.onGesture(Gesture.Shake, function() {
    if (number1 > number2) {
        basic.clearScreen()
        basic.showString(number1 + '>' + number2)
        basic.showIcon(IconNames.Happy)
    }
    else {
        basic.clearScreen()
        basic.showString(number1 + '<' + number2)
        basic.showIcon(IconNames.Sad)
    }
})