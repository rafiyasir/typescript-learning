import "reflect-metadata";
@printMetadata
class Plan {
	color: string = "red";

	@markFunction("Note!!!1")
	fly(): void {
		console.log("fly");
	}
}

function markFunction(note: string) {
	return function (target: any, key: string) {
		Reflect.defineMetadata("note", note, target, key);
	};
}

function printMetadata(target: typeof Plan) {
	for (let key in target.prototype) {
		const note = Reflect.getMetadata("note", target.prototype, key);
		console.log(note);
	}
}
