import "./App.css";
import Person from "./Person.jsx";

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  // return (
  //   <ul>
  //     {props.animals.map(
  //       (animal) =>
  //         //animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
  //         animal.startsWith("L") && <ListItem key={animal} animal={animal} />
  //     )}
  //   </ul>
  // );
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
}

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  //const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);
  return (
    <div>
      <h1>Animals:</h1>
      {/*animalList*/}
      <List animals={animals} />
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
      <Person />
    </div>
  );
}

export default App;
