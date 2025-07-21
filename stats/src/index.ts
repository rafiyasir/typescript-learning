import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { Summary } from "./Summary";
// import { MatchResut } from "./MatchResult";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv("football.csv");
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
const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
