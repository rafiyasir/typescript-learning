import fs from "fs";
import { MatchResut } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResut, string];
export abstract class CsvFileReader {
	data: MatchData[] = [];

	constructor(public filename: string) {}
	abstract mapRow(row: string[]): MatchData;
	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: "utf-8",
			})
			.split("\n")
			.map((row: string): string[] => row.split(","))
			.map(this.mapRow);
	}
}
