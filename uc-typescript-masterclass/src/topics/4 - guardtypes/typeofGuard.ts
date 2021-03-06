function foo(bar: string | number) {
    if (typeof bar === 'string') {
        return bar.toUpperCase();
    }
    return bar.toFixed(2);

}

function uan() {
    class Song {
        constructor(public title: string, public duration: string | number) { }

    }

    function getSongDuration(item: Song) {
        if (typeof item.duration === 'string') return item.duration;
        const { duration } = item;

        const minutes = Math.floor(duration / 60000);
        const seconds = (duration / 1000) % 60;
        return `${minutes}:${seconds}`;
    }

    const songDurationFromString = getSongDuration(
        new Song('Wonderful Wonderful', '05:31')
    );

    console.log(songDurationFromString);

    const songDurationfromMS = getSongDuration(
        new Song('Wonderful Wonderful', 330000)
    );

    console.log(songDurationfromMS);
}
