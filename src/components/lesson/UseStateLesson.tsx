import { useState } from "react";

/**
 * メモ:
 * useStateの講座
 * 特にわからないことはなかったのでさっと流した
 */
const App = (props: { name: string }) => {
  // count系
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

  // input系
  const [input, setInput] = useState<string>("");
  const setUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <>
      <h1>useStateのレッスン</h1>

      <h2>カウント</h2>
      <p>count: {count}</p>

      <button onClick={() => changeCount("increment")}>+1</button>
      <button onClick={() => changeCount("decrement")}>-1</button>

      <br />
      <button onClick={() => setCount(0)}>Reset</button>

      <br />
      <button onClick={double}>x2</button>

      <br />
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>

      <br />

      <h2>ユーザー入力</h2>
      <p>ユーザー入力:「{input}」</p>
      <input type="text" onChange={(e) => setUserInput(e)} />
    </>
  );
};

export default App;

/**
 * NOTE:
 * [propsの初期値設定]
 * この書き方だと型が効かないっぽい
 */
App.defaultProps = {
  name: 1,
};
