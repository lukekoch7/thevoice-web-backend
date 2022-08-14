import { Bet } from "./shared/Bet";
import { Result, Results } from "./shared/Results";

export function calcResult(bets: Bet[], resultBet: Bet): Results {
  const results: Result[] = [];
  bets.forEach((bet) => {
    const betResult: Result = {
      player: bet.player,
      drink: 0,
      distribute: 0,
    };
    if (bet.getsSeat) {
      if (resultBet.getsSeat) {
        betResult.distribute += 2;
      } else {
        betResult.drink += 2;
      }
      if (bet.numberOfBuzz) {
        if (bet.numberOfBuzz === resultBet.numberOfBuzz) {
          betResult.distribute += 5;
        } else {
          betResult.drink += 3;
        }
      }
      if (bet.coach) {
        if (bet.coach === resultBet.coach) {
          betResult.distribute += 7;
        } else {
          betResult.drink += 5;
        }
      }
    } else {
      if (!resultBet) {
        betResult.distribute += 4;
      } else {
        betResult.drink += 2;
      }
      if (bet.comeback) {
        if (resultBet.comeback) {
          betResult.distribute += 20;
        } else {
          betResult.drink += 6;
        }
      }
    }
    if (bet.cry) {
      if (resultBet.cry) {
        betResult.distribute += 4;
      } else {
        betResult.drink += 2;
      }
    }
    results.push(betResult);
  });
  return {
    timestamp: Date.now(),
    results: results
  };
}

