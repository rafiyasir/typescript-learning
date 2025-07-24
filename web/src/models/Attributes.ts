export class Attriutes<T> {
	constructor(private data: T) {}
	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}
