import { User } from "./models/User";

const user = new User({ id: 1, name: "Rafi", age: 30 });
// console.log(user.get("name"));
// console.log(user.get("age"));

// user.set({ name: "RAFI" });
// user.set({ age: 29.5 });
// console.log(user.get("name"));

user.on("change", () => {
	console.log("Change #1");
});
user.on("change", () => {
	console.log("Change #2");
});

console.log(user);
user.trigger("change");

// user.save();

setTimeout(() => {
	console.log(user);
}, 4000);

// const newUser = new User({ name: "New", age: 333 });
// newUser.save();
