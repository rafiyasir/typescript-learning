import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
	template(): string {
		return `
      <div>
        <h1>User Detail:</h1>
        <h3>Name: ${this.model.get("name")}</h3>
        <p>Age: ${this.model.get("age")}</p>
      </div>
      `;
	}
}
