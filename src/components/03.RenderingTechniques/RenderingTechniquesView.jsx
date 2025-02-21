function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => (
        <li key={animal}>{animal}</li>
      ))}
    </ul>
  );
}

function ListStartsWithL(props) {
  return (
    <ul>
      {props.animals.map(
        (animal) =>
          //animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
          animal.startsWith("L") && <ListItem key={animal} animal={animal} />
      )}
    </ul>
  );
}

function ListConditional(props) {
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

function RenderingTechniquesView() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <div>
      <h1>Animals</h1>
      <h2>list of elements:</h2>
      <ul>{animalList}</ul>
      <h2>list of components:</h2>
      <List animals={animals} />
      <h2>conditional rendering (starts with L):</h2>
      <ListStartsWithL animals={animals} />
      <h2>conditional (list):</h2>
      <ListConditional animals={animals} />
      <h2>conditional (empty):</h2>
      <ListConditional animals={[]} />
      <h2>conditional (no prop):</h2>
      <ListConditional />
    </div>
  );
}

export default RenderingTechniquesView;
