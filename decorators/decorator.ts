class Boat {
	color: string = "Red";

	get formattedColor(): string {
		return `The boats color is ${this.color}`;
	}

	@logError
	pilot(): void {
		throw new Error();
		console.log("swish");
	}
}

function logError(target: any, key: string) {
	console.log("Target: ", target);
	console.log("Key: ", key);
}
