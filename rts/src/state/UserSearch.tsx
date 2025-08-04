import { useState } from "react";

const users = [
  { name: "Rafi", age: 20 },
  { name: "Rafi1", age: 25 },
  { name: "Rafi3", age: 30 },
];

const onClick = () => {};
const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};

export default UserSearch;
