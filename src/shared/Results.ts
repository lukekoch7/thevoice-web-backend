export interface Result {
  player: string;
  drink: number;
  distribute: number;
}

export interface Results {
  timestamp: number;
  results: Result[]
}
