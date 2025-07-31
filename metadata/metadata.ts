import "reflect-metadata";

const plane = {
	color: "red",
};

Reflect.defineMetadata("note", "hi there", plane);
Reflect.defineMetadata("height", 10, plane);

Reflect.defineMetadata("info", "light red", plane, "color");
Reflect.defineMetadata("note", "bye there", plane, "color");

const note = Reflect.getMetadata("note", plane);
const height = Reflect.getMetadata("height", plane);

const info = Reflect.getMetadata("info", plane, "color");
const colorNote = Reflect.getMetadata("note", plane, "color");

console.log(plane);
console.log(note);
console.log(height);

console.log(info);
console.log(colorNote);
