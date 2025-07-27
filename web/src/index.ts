import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";
import { UserList } from "./views/UserList";

const user = User.buildUser({ id: 1, name: "Rafi", age: 30 });
console.log(user.get("name"));
console.log(user.get("age"));

// user.set({ name: "RAFI" });
// user.set({ age: 29.5 });
// console.log(user.get("name"));

user.on("change", () => {
	console.log("Change #1");
	console.log(user);
});

user.set({ name: "RAFI UZZAMAN" });
user.set({ age: 29.6 });
console.log(user.get("name"));
user.on("save", () => {
	console.log("Save #1");
	console.log(user);
});

user.fetch();
user.save();

// console.log(user);
user.trigger("save");

// user.save();

// setTimeout(() => {
// 	console.log(user);
// }, 4000);

// const newUser = new User({ name: "New", age: 333 });
// newUser.save();

const collection = User.buildUserCollection();

collection.on("change", () => {
	console.log("Collection: ");
	console.log(collection);
});
collection.fetch();

const root = document.getElementById("root");
const usersList = new Collection<User, UserProps>(
	"http://localhost:3000/users",
	(json: UserProps) => {
		return User.buildUser(json);
	}
);

if (root) {
	const userForm = new UserForm(root, user);
	userForm.render();

	const userEdit = new UserEdit(root, user);
	userEdit.render();

	usersList.on("change", () => {
		new UserList(root, usersList).render();
	});
	usersList.fetch();
	console.log("UserEdit: ", userEdit);
} else {
	throw new Error("Root Element Not Found");
}
