
export class BoxSound {

    constructor (options) {
        const {
            title, songsPath
        } = options

        this.title = title
        this.songsPath = songsPath
    }

    randomPath () {
        return this.songsPath[
            Math.floor( Math.random( )* this.songsPath.length)
        ]
    }

    getSound () {
        const path = this.randomPath()
        const isDev = import.meta.env.DEV

        if (isDev) {
            return `/public/audios/${path}`
        } else {
            return `/audios/${path}`
        }
    }

}