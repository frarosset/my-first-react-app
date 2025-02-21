import useInterval from "./useInterval.js";
import { useState, useRef, useEffect } from "react";

// see: https://overreacted.io/making-setinterval-declarative-with-react-hooks/

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
    buttonRef.current.textContent = "Hey, I'm different!";
    let timeout = setTimeout(() => {
      buttonRef.current.textContent = "Click Me!";
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}

function RefsView() {
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);
  let [count, setCount] = useState(0);

  useInterval(
    () => {
      // Your custom logic here
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  function handleDelayChange(e) {
    setDelay(Number(e.target.value));
  }

  function handleIsRunningChange(e) {
    setIsRunning(e.target.checked);
  }

  return (
    <div>
      <ButtonComponent />
      <h1>{count}</h1>
      <input
        type="checkbox"
        checked={isRunning}
        onChange={handleIsRunningChange}
      />
      Running
      <br />
      <input value={delay} onChange={handleDelayChange} />
    </div>
  );
}

export default RefsView;
