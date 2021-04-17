export type RecordResponse = {
    content: RecordItem[];
    linesPerPage: number;
    totalPages: number;
}

export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform,
    genreName: string;
  }

export type Platform = 'XBOX' | 'Play Station' |'PC'

export type Game = {
    id: number;
    title: string;
    platform: Platform;
}

export type ChartItem = {
    x: string;
    y: number;
}