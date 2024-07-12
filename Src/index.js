
// sync video w/ audio
// Thanks to https://blog.kazitor.com/2014/12/portal-ascii/ for the ascii art! you will be credited in the repo
const FONTSZE = 20;
let main;

const init = () => {
    var script = document.createElement('script');
    script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
    document.getElementsByTagName('head')[0].appendChild(script);     
    main = new Main()
    main.dialouge.start() // start playing
}
class Main {
    constructor() {
        this.version = "1.0.0";
        this.audio = new Audio("Music/stillalive.mp3");
        this.dialouge = new Dialouge(this.audio);
        this.width = 600;
        this.height = 640;
    }
}
class Dialouge  {
    constructor(audio) {
        this.CREDITSDATA = fetch("Data\\credits.txt")
        .then(
            (res) => res.text()
        ).then((text) => {text.split(",")})
        .catch((e) => console.error(e));

        console.log(this.CREDITSDATA)
        this.asciiartloc = document.getElementById("ascii"); // container for ascii art
        this.creditsloc = document.getElementById("credits") // credits container
        this.lyricsloc = document.getElementById("");
        this.clock = Date.now(); // start playtime
        this.currentLine = 0
        this.creditLineTime = 1200
        this.audio = audio
        this.audio.play()
    }

    // inside a form loop have timeouts for each of the sections based on time per character
    start() { // start scrolling across. read the json file. the key is the timestamp in ms . No need for async programming, we just render 1 char at a time anyways
        for (const x of this.CREDITSDATA) {
            let chars = x.split(""), i = 0
            let time_credits = this.creditLineTime / chars.length
            var o = setTimeout(function(){
                this.creditsloc.innerHTML += chars[i]
                i++
            },time_credits)
            let time_lyrics;
        }
    }
    pause(tt) {
        let t = setTimeout(function() {
            return 0;
        },tt)
    }
    displayascii(name) {
        fetch(name)
        .then((res) => res.text())
        .then((text) => {
            this.asciiartloc.innerHTML = text;
        })
        .catch((e) => console.error(e));
    }
    movecursor() {

    }
    println() {

    }
    printchr() {

    }
    clear(container) {

    }
    
}

