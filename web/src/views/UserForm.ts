import { User } from "../models/User";

export class UserForm {
	constructor(public parent: Element | null, public model: User) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			// "click:button": this.onButtonClick,
			// "mouseenter:h1": this.onHeaderMouseEnter,
			"click:.set-age": this.onSetAgeClick,
		};
	}

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
        <button>Click Me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		for (const eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(":");
			fragment
				.querySelectorAll(selector)
				.forEach((element) =>
					element.addEventListener(eventName, eventsMap[eventKey])
				);
		}
	}

	render(): void {
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		if (this.parent) this.parent.append(templateElement.content);
	}
}
