import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}
const rootUrl: string = "http://localhost:3000/user";
export class User {
	public events: Eventing = new Eventing();
	public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	public attributes: Attributes<UserProps>;
	constructor(private data: UserProps) {
		this.attributes = new Attributes<UserProps>(data);
	}
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}
	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger("change");
	}
}
