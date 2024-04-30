class Music {
    constructor(name, artist, genre) {
        this.name = name;
        this.artist = artist;
        this.genre = genre;
    }

    getDetails() {
        return `Song name: ${this.name}\nSinger: ${this.artist}\nGenre: ${this.genre}`;
    }
}

class MusicPlayer extends Music {
    constructor() {
        super();
        this.size = 0;
        this.playlist = [];
    }

    add(track, postion) {
        if(this.size === 0) {
            this.playlist.push(track);
            this.size ++;
        } else if(postion <0) {
            throw new Error("Sorry the postion that you've provided is out of range");
        } else if(postion < this.size){
            this.size ++;
            this.playlist.splice(postion, 0, track);
        } else {
            this.size ++;
            this.playlist.push(track);
        }
    }

    remove(postion) {
        if(this.size === 0) {
            throw new Error("There is no songs in the playlist");
        }
        if(postion <0 || postion >= this.size) {
            throw new Error("Sorry the postion that you've provided is out of range");
        } else {
            this.playlist.splice(postion, 1);
            this.size --;
        }
    }

    show() {
        let postion = 0;
        for(const music of this.playlist) {
            postion++;
            console.log(`${postion}.\n${music.getDetails()}`);
        }
    }
}

const music = new Music("Sky", "Lin", "Rock");
const track = new Music("Blue", "Yellow", "hiphop")
const playlist = new MusicPlayer();
playlist.add(music,0);
playlist.add(track,1);
// playlist.show();
// playlist.remove(0);
playlist.remove(1);
playlist.show();

// for (const music of playlist) {
//     console.log(music.getDetails());
// }
// console.log(music.getDetails());