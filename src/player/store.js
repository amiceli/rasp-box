import { atom } from 'nanostores'
import {
    pressedButton,
    buttonPressed,
    pressedAxis,
} from '../joypad/store'
import {
    audios,
    getRandomSong,
} from './audios'

export const playingSound = atom(null)

export const lastPlayedSound = atom(null)

const audioElement = new Audio()

audioElement.addEventListener('ended', audioHasFinished)

pressedButton.subscribe((value) => {
    if (value !== null) {
        const boxSound = audios[value]
        const src = boxSound.getSound()

        playSong(src)
    } else {
        // 
    }
})

pressedAxis.subscribe((value) => {
    if (value === 'left' && lastPlayedSound.get() !== null) {
        playSong(lastPlayedSound.get())
    } else if (value === 'right') {
        const randomSound = getRandomSong()
        playSong(randomSound)
    } else if (value === 'bottom') {
        reduceVolume()
    } else if (value === 'top') {
        increaseVolume()
    } else {
        // 
    }
})

function audioHasFinished() {
    playingSound.set(null)
    buttonPressed(null)
}

function playSong(src) {
    if (audioElement.paused === false) {
        audioElement.pause()
    }

    lastPlayedSound.set(src)

    audioElement.src = src
    audioElement.play()
}

function increaseVolume() {
    if (audioElement.volume < 1) {
        audioElement.volume += 0.1
    }

    console.debug(audioElement.volume)
}

function reduceVolume() {
    if (audioElement.volume > 0) {
        audioElement.volume -= 0.1
    }

    console.debug(audioElement.volume)
}