import { atom } from 'nanostores'

export const connected = atom(false)

export const pressedButton = atom(null)

export const pressedAxis = atom(null)

export function isConnected() {
    connected.set(true)
}

export function isDisconnected() {
    connected.set(false)
}

export function buttonPressed (button) {
    pressedButton.set(button)
}

export function axisPressed (axis) {
    pressedAxis.set(axis)
}