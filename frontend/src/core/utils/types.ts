export type RecordResponse = {
    content: RecordItem[];
    linesPerPage: number;
}

export type RecordItem = {
    id: number,
    moment: string,
    name: string,
    age: number,
    gameTitle: string,
    gamePlatform: Platform,
    genreGame: string
}

export type Platform = 'XBOX' | 'Play Station' |'PC'