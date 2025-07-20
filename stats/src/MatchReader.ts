import { CsvFileReader } from "./CsvFileReader";
import { MatchResut } from "./MatchResult";
import { dateStringToDate } from "./utils";

class MatchReader extends CsvFileReader {
	mapRow(row: string[]): MatchData {
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResut,
			row[6],
		];
	}
}
