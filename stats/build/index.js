"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";
var matchResut;
(function (matchResut) {
    matchResut["HomeWin"] = "H";
    matchResut["AwayWin"] = "A";
    matchResut["Draw"] = "D";
})(matchResut || (matchResut = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === matchResut.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResut.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
