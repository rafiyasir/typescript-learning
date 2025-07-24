import { Model } from "./Model";

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}
const rootUrl: string = "http://localhost:3000/users";
export class User extends Model<UserProps> {}
