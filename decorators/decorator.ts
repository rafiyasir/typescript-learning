class Boat {
	color: string = "Red";

	get formattedColor(): string {
		return `The boats color is ${this.color}`;
	}

	@logError("HHellow Error")
	pilot(): void {
		throw new Error();
		console.log("swish");
	}
}

function logError(errorMsg: string) {
	return function (target: any, key: string, desc: PropertyDescriptor) {
		const method = desc.value;

		desc.value = function () {
			try {
				method();
			} catch (error) {
				console.log(errorMsg);
			}
		};
	};
}

new Boat().pilot();
