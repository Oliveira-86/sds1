export type RecordsResponse = {
    content: RecordItem[];
    totalPages: number;
}

export type RecordItem = {
    id: number,
    moment: string,
    name: string,
    age: number,
    gameTitle: string,
    gamePlatform: Platorm,
    genreGame: string;
}

export type Platorm = 'XBOX' | 'PC' | 'PLAYSTATION'; 