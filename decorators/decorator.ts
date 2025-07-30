@classDecorator
class Boat {
	@testDecorator
	color: string = "Red";

	@testDecorator
	get formattedColor(): string {
		return `The boats color is ${this.color}`;
	}

	@logError("HHellow Error")
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator stairing: boolean
	): void {
		if (speed === "fast") {
			console.log("swish");
		} else {
			console.log("-----");
		}
	}
}

function classDecorator(constructor: typeof Boat) {
	console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log(key, index);
}

function testDecorator(target: any, key: string) {
	console.log(target);
	console.log(key);
	console.log(target.color);
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

// new Boat().pilot();
