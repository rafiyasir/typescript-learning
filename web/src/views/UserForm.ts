import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
	eventsMap(): { [key: string]: () => void } {
		return {
			// "click:button": this.onButtonClick,
			// "mouseenter:h1": this.onHeaderMouseEnter,
			"click:.set-age": this.onSetAgeClick,
			"click:.set-name": this.onSetNameClick,
			"click:.save-model": this.onSaveClick,
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

	onSaveClick = (): void => {
		this.model.save();
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
        <input placeholder="${this.model.get("name")}"/>
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save</button>
      </div>
    `;
	}
}
