import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const fullName = `${person.firstName} ${person.lastName}`;

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleSetFirstName = (e) => {
    setPerson({ ...person, firstName: e.target.value });
  };

  const handleSetLastName = (e) => {
    setPerson({ ...person, lastName: e.target.value });
  };

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <CustomInput label="First Name" changeHandler={handleSetFirstName} />
      <CustomInput label="Last Name" changeHandler={handleSetLastName} />
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

function CustomInput({ label, changeHandler }) {
  return (
    <label>
      {label}
      <input onChange={changeHandler} />
    </label>
  );
}
