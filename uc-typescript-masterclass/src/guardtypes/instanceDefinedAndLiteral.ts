class Song {
    kind: 'song';
    constructor(public title: string, public duration: number) { }
}

class Playlist {
    kind: 'playlist';

    constructor(public name: string, public songs: Song[]) { }
}

function isSong(item): item is Song {
    return 'title' in item;
}

function getItemName(item: Song | Playlist) {
    // if (isSong(item)) {
    if (item.kind === 'song') {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('auau', 300000));
console.log('the song name is: ' + songName);

const playlistName = getItemName(
    new Playlist('best songs', [new Song('aiaiai', 300000)])
);

console.log('Playlist name: ' + playlistName);
