import { Bet } from "./shared/Bet";
import { Result, Update } from "./shared/Results";

export function calcResults(bets: Bet[], resultBet: Bet): Result[] {
  const results: Result[] = [];
  bets.forEach((bet) => {
    results.push(calcSingleResult(bet, resultBet));
  });
  return results;
}

export function calcSingleResult(bet: Bet, resultBet: Bet): Result{
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
    if (bet.numberOfBuzz !== undefined) {
      if (bet.numberOfBuzz === resultBet.numberOfBuzz) {
        betResult.distribute += 5;
      } else {
        betResult.drink += 3;
      }
    }
    if (bet.coach !== undefined) {
      if (bet.coach === resultBet.coach) {
        betResult.distribute += 7;
      } else {
        betResult.drink += 5;
      }
    }
  } else {
    if (!resultBet.getsSeat) {
      betResult.distribute += 4;
    } else {
      betResult.drink += 2;
    }
    // if (bet.comeback) {
    //   if (resultBet.comeback) {
    //     betResult.distribute += 20;
    //   } else {
    //     betResult.drink += 6;
    //   }
    // }
  }
  if (bet.cry) {
    if (resultBet.cry) {
      betResult.distribute += 4;
    } else {
      betResult.drink += 2;
    }
  }
  return betResult;
}
