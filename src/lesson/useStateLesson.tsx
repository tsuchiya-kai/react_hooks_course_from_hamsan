import { useState } from "react";

/**
 * メモ:
 * useStateの講座
 * 特にわからないことはなかったのでさっと流した
 */
const App = () => {
  const [count, setCount] = useState<number>(0);

  type ChangeType = "increment" | "decrement";
  const changeCount = (type: ChangeType): void => {
    setCount((prev) => {
      if (type === "increment") return prev + 1;
      if (type === "decrement") return prev - 1;
      return prev;
    });
  };

  const double = () => setCount((prev) => prev * 2);

  const divide3 = () => setCount((prev) => (prev % 3 === 0 ? prev / 3 : prev));

  return (
    <>
      <h1>useStateのレッスン</h1>

      <p>count: {count}</p>

      <button onClick={() => changeCount("increment")}>+1</button>
      <button onClick={() => changeCount("decrement")}>-1</button>

      <br />
      <button onClick={() => setCount(0)}>Reset</button>

      <br />
      <button onClick={double}>x2</button>

      <br />
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  );
};

export default App;
