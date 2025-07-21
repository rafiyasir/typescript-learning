class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfString {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfAnything<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

const arr = new ArrayOfAnything(["a", "b", "c"]);

function printStrings(arr: string[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printNumbers(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function printAnything<T>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

printAnything(["a", "b", "c"]);

//Generic Constraints
class Car {
	print() {
		console.log("I am a Car");
	}
}

class House {
	print() {
		console.log("I am a House");
	}
}

interface Printable {
	print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
	for (let i = 0; i < arr.length; i++) {
		arr[i].print();
	}
}

printHouseOrCars([new House(), new House()]);
printHouseOrCars([new Car(), new Car(), new House()]);
