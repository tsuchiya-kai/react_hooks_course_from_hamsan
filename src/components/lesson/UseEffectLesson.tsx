import { useState, useEffect } from "react";

/**
 * メモ:
 * useEffectはレンダリングの後で実行される。
 *
 * レンダリングが更新されるたびにuseEffectが呼ばれる。
 *
 * ClassベースのReactの
 * - componentDidMount
 * - componentDidUpdate
 * のようなタイミングで発火している。
 *
 * Vueだとcreatedやupdatedライフサイクル的なものだろうか？
 *
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

  // 全てのmount時とupdate時に発火する
  useEffect(() => {
    console.log("useEffect");
  });

  // componentDidMount（mount時に1回だけ発火する）
  useEffect(() => {
    console.log("componentDidMountのタイミングです");
  }, []); // 空配列を第二引数に渡す

  // 特定のパラメーターの描画時・値の更新時に描画される
  useEffect(() => {
    console.log("countのやつ");
  }, [count]);

  return (
    <>
      <h1>useEffectのレッスン</h1>

      <p>count: {count}</p>

      <button onClick={() => changeCount("increment")}>+1</button>
      <button onClick={() => changeCount("decrement")}>-1</button>
    </>
  );
};

export default App;
