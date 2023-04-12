import fs from 'fs'
import https from 'https'

const content = fs.readFileSync('./audios.txt')
const audios = content.toString().split('\n')

await Promise.all(
    audios.map((link) => downloadAudio(link))
)

function downloadAudio(link) {
    return new Promise((resolve) => {
        https.get(link, (res) => {
            const splitLink = link.split('/')
            const name = splitLink[splitLink.length - 1]

            const path = `./public/audios/${name}`
            const filePath = fs.createWriteStream(path)

            res.pipe(filePath)

            filePath.on('finish', () => {
                filePath.close();
                console.log(`${name} download Completed`);

                resolve()
            })
        })
    })
}
