export interface Bet {
    player: string;
    getsSeat: boolean;
    numberOfBuzz?: number;
    coach?: Coach;
    comeback?: boolean;
    cry?: boolean;
}

export enum Coach {
    "Mark",
    "Stefanie",
    "Peter",
    "Rea",
}