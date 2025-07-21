"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// import { MatchResut } from "./MatchResult";
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// console.log(reader.data);
// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";
// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
// 	if (match[1] === "Man United" && match[5] === MatchResut.HomeWin) {
// 		manUnitedWins++;
// 	} else if (match[2] === "Man United" && match[5] === MatchResut.AwayWin) {
// 		manUnitedWins++;
// 	}
// }
// console.log(`Man United won ${manUnitedWins} games`);
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
