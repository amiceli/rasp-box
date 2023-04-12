
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
        
        return `/public/audios/${path}`
    }

}