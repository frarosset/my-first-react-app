import "./App.css";

function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => (
        <ListItem key={animal} animal={animal} />
      ))}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  //const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals:</h1>
      {/*animalList*/}
      <List animals={animals} />
    </div>
  );
}

export default App;
