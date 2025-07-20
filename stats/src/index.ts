import { MatchReader } from "./MatchReader";
import { MatchResut } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();
console.log(reader.data);

// const homeWin = "H";
// const awayWin = "A";
// const draw = "D";

let manUnitedWins = 0;

for (let match of reader.data) {
	if (match[1] === "Man United" && match[5] === MatchResut.HomeWin) {
		manUnitedWins++;
	} else if (match[2] === "Man United" && match[5] === MatchResut.AwayWin) {
		manUnitedWins++;
	}
}

console.log(`Man United won ${manUnitedWins} games`);
