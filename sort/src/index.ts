class Sorter {
	constructor(public collection: number[]) {}
	sort(): void {}
}

const sorter = new Sorter([10, 3, 0, 4]);
sorter.sort();
console.log(sorter.collection);
