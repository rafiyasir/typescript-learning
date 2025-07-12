class Vehicle {
	drive(): void {
		console.log("Bhrrr bhrrrr");
	}
	honk(): void {
		console.log("bho bho");
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log("vroom vroom");
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
