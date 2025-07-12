class Vehicle {
	// public drive(): void {
	// 	console.log("Bhrrr bhrrrr");
	// }
	protected honk(): void {
		console.log("bho bho");
	}
}

class Car extends Vehicle {
	private drive(): void {
		console.log("vroom vroom");
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car();
car.startDrivingProcess();
// car.honk();
