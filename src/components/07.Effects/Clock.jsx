import { useState, useEffect } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{counter} seconds have passed.</p>;
}
