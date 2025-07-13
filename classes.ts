class Vehicle {
	// public drive(): void {
	// 	console.log("Bhrrr bhrrrr");
	// }
	// color: string;
	constructor(public color: string) {
		// this.color = color;
	}
	protected honk(): void {
		console.log("bho bho");
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log("vroom vroom");
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, "red");
console.log(car.color);
car.startDrivingProcess();
// car.honk();
