class Boat {
	color: string = "Red";

	get formattedColor(): string {
		return `The boats color is ${this.color}`;
	}

	@testDecorator
	pilot(): void {
		console.log("swish");
	}
}

function testDecorator(target: any, key: string) {
	console.log("Target: ", target);
	console.log("Key: ", key);
}
