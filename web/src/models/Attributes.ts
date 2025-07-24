import { UserProps } from "./User";

export class Attriutes<T> {
	constructor(private data: T) {}
	get<K extends keyof T>(key: K): T[K] {
		return this.data[key];
	}

	set(update: T): void {
		Object.assign(this.data, update);
	}
}

const attrs = new Attriutes<UserProps>({
	id: 6,
	age: 33,
	name: "er33eref",
});
