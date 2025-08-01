import { HasId, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
	regions: { [key: string]: Element } = {};
	constructor(public parent: Element | null, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	regionsMap(): { [key: string]: string } {
		return {};
	}

	eventsMap(): { [key: string]: () => void } {
		return {};
	}

	bindModel(): void {
		this.model.on("change", () => {
			this.render();
		});
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

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key];
			const element = fragment.querySelector(selector);
			if (element) {
				this.regions[key] = element;
			}
		}
	}

	onRender(): void {}

	render(): void {
		if (this.parent) this.parent.innerHTML = "";
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);

		this.onRender();
		if (this.parent) this.parent.append(templateElement.content);
	}
}
