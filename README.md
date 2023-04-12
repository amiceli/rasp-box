# rasp-box

Play song with your arcade buttons and joystick.

This is project is built with ViteJS and Vanilla JS, no framework.

I use it to play songs with my arcade buttons and joystick with my raspberry.

My arcade is like this : [see it on Amazon](https://www.amazon.fr/EG-joueurs-joystick-Illuminati-Raspberry/dp/B075J882S8/ref=sr_1_6?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GKFB8CTVSAEJ&keywords=arcade+raspberry&qid=1681328687&sprefix=arcade+raspberry%2Caps%2C94&sr=8-6).

---

To download songs add links edit `audios.txt` file at root.

For example `audios.txt` : 

    https://www.myinstants.com/media/sounds/perfect-fart.mp3

Install project : 

    npm install

Run for dev : 

    npm run dev

Build project : 

    npm run build

`build` command execute `init.js` file and mp3 files will be downloaded.