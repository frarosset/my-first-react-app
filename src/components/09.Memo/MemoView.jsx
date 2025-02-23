import { memo, Profiler, useState, useMemo, useRef } from "react";

// BASED ON https://codesandbox.io/p/sandbox/github/TheOdinProject/react-examples/tree/main/memoization-lesson-example?embed=1&file=%2Fsrc%2FApp.jsx%3A48%2C35-48%2C46

function ButtonComponent({ children, onClick }) {
  console.log("Rendering ButtonComponent");

  // To simulate a very slow render
  let i = 0;
  let j = 0;
  // increase iteration count for more la
  const ITERATION_COUNT = 10_000;
  while (i < ITERATION_COUNT) {
    while (j < ITERATION_COUNT) {
      j += 1;
    }
    i += 1;
    j = 0;
  }

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

// _eslint-disable-next-line react/function-component-definition, react/prop-types
const MemoButtonComponent = memo((props) => <ButtonComponent {...props} />);
MemoButtonComponent.displayName = "MemoButtonComponent";

function Counter() {
  const [count, setCount] = useState(0);
  const durationRef = useRef({ baseDuration: 0, actualDuration: 0 });

  const [memoButton, setMemoButton] = useState(false);
  const [memoizedCallback, setMemoizedCallback] = useState(false);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  // first arrow function is useMemo's callback
  // second arrow function is the function that will be cached to be called later
  const memoizedHandleClick = useMemo(() => handleClick, []);

  const onRender = (_id, _phase, actualDuration, baseDuration) => {
    durationRef.current = { actualDuration, baseDuration };
  };

  return (
    <div>
      <Profiler id="buttoncomponent" onRender={onRender}>
        <button onClick={() => setMemoButton((x) => !x)}>
          {`Swap to ${memoButton ? "Not Memo Button" : "Memo Button"}`}
        </button>
        <button onClick={() => setMemoizedCallback((x) => !x)}>
          {`Swap to ${
            memoizedCallback ? "Not Memoized Callback" : "Memoized Callback"
          }`}
        </button>
        <p>
          {`${memoButton ? "Memo Button" : "Not Memo Button"} || ${
            memoizedCallback ? "Memoized Callback" : "Not Memoized Callback"
          }`}
        </p>
        <h1>{count}</h1>
        {memoButton ? (
          <MemoButtonComponent
            onClick={memoizedCallback ? memoizedHandleClick : handleClick}
          >
            Click me!
          </MemoButtonComponent>
        ) : (
          <ButtonComponent
            onClick={memoizedCallback ? memoizedHandleClick : handleClick}
          >
            Click me!
          </ButtonComponent>
        )}
      </Profiler>
      <div>
        <h2>Base Duration:</h2>
        <p>
          <strong>{durationRef.current.baseDuration}</strong>
          <span>
            {" "}
            - The number of milliseconds estimating how much time it would take
            to re-render the entire Profile subtree without any optimizations.
            It is calculated by summing up the most recent render durations of
            each component in the tree. This value estimates a worst-case cost
            of rendering (e.g. the initial mount or a tree with no memoization).
            Compare actualDuration against it to see if memoization is working.
          </span>
        </p>
        <h2>Actual Duration:</h2>
        <p>
          <strong>{durationRef.current.actualDuration}</strong>
          <span>
            {" "}
            - The time spent rendering the Profiler component and its descendant
            for the current update, 0 means it rendered extremely fast! This
            will be the same as the Base Duration on the first render
          </span>
        </p>
      </div>
    </div>
  );
}

function MemoView() {
  return <Counter />;
}

export default MemoView;
