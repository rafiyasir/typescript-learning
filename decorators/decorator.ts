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

function logError(target: any, key: string, desc: PropertyDescriptor) {
	const method = desc.value;

	desc.value = function () {
		try {
			method();
		} catch (error) {
			console.log("Oops, boat was sunk");
		}
	};
}

new Boat().pilot();
