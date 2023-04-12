import 'joypad.js'
import {
    isConnected,
    isDisconnected,
    buttonPressed,
    axisPressed,
} from './store';

let allow = true

joypad.on('connect', (e) => {
    const { id } = e.gamepad;

    isConnected()
    console.log(`${id} connected!`);
});

joypad.on('disconnect', (e) => {
    const { id } = e.gamepad

    console.log(`${id} disconnect!`)
    isDisconnected()
});

joypad.on('button_press', e => {
    const { buttonName } = e.detail;

    console.log(`${buttonName} was pressed!`);
    buttonPressed(buttonName)
})



joypad.on('axis_move', e => {
    if (allow) {
        const direction = e.detail.directionOfMovement

        allow = false
        axisPressed(direction)

        console.log(`${direction} was moved!`);

        setTimeout(() => {
            allow = true
        }, 1000)
    }
})
