import express from "express";
import { Bet } from "./src/shared/Bet";
import { Results } from "./src/shared/Results";
import { calcResult } from "./src/gameLogic";
import cors from "cors";
import bodyParser from "body-parser";

const app: express.Application = express();

const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));
app.use(bodyParser.json())
const port: number = parseInt(process.env.PORT ?? "3001");

let currentBets: Bet[] = [];
let currentResults: Results = {
  timestamp: Date.now(),
  results: [],
};

// Handling '/' Request
app.get("/", (req, res) => {
  res.send("TheVoice Web backend");
});

app.post("/placeBet", (req, res) => {
  const newBet: Bet = req.body;
  if (!newBet) {
    res.sendStatus(400);
  } else {
    if(newBet.player === "admin42"){
      currentResults = calcResult(currentBets, newBet);
      currentBets = [];
      res.send("Result successfully processed!");
      return;
    }
    currentBets = currentBets.filter((bet) => bet.player !== newBet.player)
    currentBets.push(newBet);
    console.log(`${newBet.player} placed bet: ${JSON.stringify(newBet)}`)
    res.send("Successfully placed bet!");
  }
});

app.get("/results", (req, res) => {
  res.json(currentResults);
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
