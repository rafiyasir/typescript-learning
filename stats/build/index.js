"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
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
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
