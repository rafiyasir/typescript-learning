import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";

enum matchResut {
	HomeWin = "H",
	AwayWin = "A",
	Draw = "D",
}

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === "Man United" && match[5] === matchResut.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === "Man United" && match[5] === matchResut.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
