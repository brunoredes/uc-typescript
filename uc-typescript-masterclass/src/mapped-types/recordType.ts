// let dictionary: { [key: string]: any } = {};
let dictionary: Record<string, typeof item> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js090js9',
    next: 'js789js23'
};

dictionary[0] = item;