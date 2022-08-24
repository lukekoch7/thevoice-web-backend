import { calcResults, calcSingleResult } from "./gameLogic";
import { Bet } from "./shared/Bet";

test("correct no seat bet", () => {
  const bet: Bet = {player:"test", getsSeat: false}
  const resultBet: Bet = {player:"admin42", getsSeat: false}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test",drink:0, distribute:4})
})
test("correct seat bet", () => {
  const bet: Bet = {player:"test", getsSeat: true}
  const resultBet: Bet = {player:"admin42", getsSeat: true}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test",drink:0, distribute:2})
})

test("incorrect no seat", () => {
  const bet: Bet = {player:"test", getsSeat: false}
  const resultBet: Bet = {player:"admin42", getsSeat: true}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test",drink:2, distribute:0})
})
test("incorrect seat bet", () => {
  const bet: Bet = {player:"test", getsSeat: true}
  const resultBet: Bet = {player:"admin42", getsSeat: false}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test",drink:2, distribute:0})
})

test("correct full bet", () => {
  const bet: Bet = {player:"test", getsSeat: true, numberOfBuzz:4, coach: 1, cry: true}
  const resultBet: Bet = {player:"admin42", getsSeat: true, numberOfBuzz:4, coach: 1, cry: true}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test",drink:0, distribute:18})
})
test("fully false full bet", () => {
  const bet: Bet = {player:"test", getsSeat: true, numberOfBuzz:4, coach: 1, cry: true}
  const resultBet: Bet = {player:"admin42", getsSeat: false, cry: false}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test", drink:12, distribute:0})
})

test("partially incorrect full bet", () => {
  const bet: Bet = {player:"test", getsSeat: true, numberOfBuzz:4, coach: 1, cry: true}
  const resultBet: Bet = {player:"admin42", getsSeat: true, numberOfBuzz:2, coach: 2, cry: false}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test", drink:10, distribute:2})
})
test("partially incorrect full bet", () => {
  const bet: Bet = {player:"test", getsSeat: true, numberOfBuzz:4, coach: 1, cry: true}
  const resultBet: Bet = {player:"admin42", getsSeat: true, numberOfBuzz:4, coach: 2, cry: false}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test", drink:7, distribute:7})
})

test("seat + number", () => {
  const bet: Bet = {player:"test", getsSeat: true, numberOfBuzz:0}
  const resultBet: Bet = {player:"admin42", getsSeat: true, numberOfBuzz:0}
  expect(calcSingleResult(bet, resultBet))
    .toStrictEqual({player:"test", drink:0, distribute:7})
})