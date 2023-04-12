import { BoxSound } from './BoxSound'

// https://www.myinstants.com/en/index/fr/

export const audios = {
    button_0: new BoxSound({
        title: 'fart',
        songsPath: [
            'perfect-fart.mp3',
            'wet-fart-squish.mp3',
        ]
    }),
    button_1: new BoxSound({
        title: 'badumtss',
        songsPath: [
            'badumtss-hq.mp3',
        ]
    }),
    button_2: new BoxSound({
        title: 'gueule',
        songsPath: [
            'ah-si-tu-pouvais-fermer-ta-gueule.mp3',
        ]
    }),
    button_3: new BoxSound({
        title: 'Bas les couilles',
        songsPath: [
            'mon-film_1.mp3',
        ]
    }),
    button_4: new BoxSound({
        title: 'On s\'en branle',
        songsPath: [
            'afli3bdsuqy.mp3',
            'toutlemondesenbranle.mp3',
        ]
    }),
    button_5: new BoxSound({
        title: 'bravo',
        songsPath: [
            'applaudissement-concert-bar-8.mp3',
        ]
    }),
    button_6: new BoxSound({
        title: 'gear',
        songsPath: [
            'tindeck_1.mp3',
        ]
    }),
    button_7: new BoxSound({
        title: 'canard',
        songsPath: [
            'mac-quack.mp3',
        ]
    }),
}

export function getRandomSong() {
    const values = Object.values(audios)
    const randomButtonSound = values[
        Math.floor(Math.random() * values.length)
    ]

    const randomSound = randomButtonSound.getSound()

    return randomSound
}