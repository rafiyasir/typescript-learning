import { User } from "../models/User";
import { View } from "./View";

export class UserForm extends View {
	eventsMap(): { [key: string]: () => void } {
		return {
			// "click:button": this.onButtonClick,
			// "mouseenter:h1": this.onHeaderMouseEnter,
			"click:.set-age": this.onSetAgeClick,
			"click:.set-name": this.onSetNameClick,
		};
	}

	onSetNameClick = (): void => {
		if (this.parent) {
			const input = this.parent?.querySelector("input");
			if (input) {
				const name = input?.value;
				this.model.set({ name });
			}
		}
	};

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	// onHeaderMouseEnter(): void {
	// 	console.log("H1 Mouse Enter");
	// }

	// onButtonClick(): void {
	// 	console.log("Button Clicked");
	// }

	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <h2>Name: ${this.model.get("name")}</h2>
        <p>Age: ${this.model.get("age")}</p>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
	}
}
