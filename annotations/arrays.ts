const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["corolla"], ["camaro"]];

const b = [];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();
// carMakers.push(100);

carMakers.map((car: string): string => {
	return car.toUpperCase();
});

const importantDates: (Date | string)[] = [new Date()];
importantDates.push(new Date());
importantDates.push("2025-07-12");
// importantDates.push(100)
