import { User } from "./models/User";

const user = new User({ name: "Rafi", age: 30 });
console.log(user.get("name"));
console.log(user.get("age"));

user.set({ name: "RAFI" });
console.log(user.get("name"));

user.on("change", () => {
	console.log("Change #1");
});
user.on("change", () => {
	console.log("Change #2");
});

console.log(user);
user.trigger("change");
