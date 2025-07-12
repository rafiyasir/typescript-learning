class Vehicle {
	drive(): void {
		console.log("Bhrrr bhrrrr");
	}
	honk(): void {
		console.log("bho bho");
	}
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
