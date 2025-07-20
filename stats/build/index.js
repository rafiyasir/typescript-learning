"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResut.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResut.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
