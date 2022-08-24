import { Bet } from "./Bet";

export interface Result {
  player: string;
  drink: number;
  distribute: number;
}

export interface Update {
  timestamp: number;
  isBlocked: boolean;
  results: Result[]
  bets: Bet[]
}
