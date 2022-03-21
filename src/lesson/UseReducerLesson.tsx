import { useState, useEffect, useReducer } from "react";

/**
 * メモ:
 * reducerは純粋関数（副作用のない関数）
 * 純粋関数とは、同じ引数を与えて実行すれば何度でも同じ結果を返す関数のこと。
 *
 * Reactプログラミングにおいては、外部から与えるトリガーのことをactionと呼び
 * actionの種別のことをtypeと呼ぶ。
 *
 * それらがどう言う状態の時にどう言う処理をするのかをまとめた表を状態遷移表という。
 * 表にすると漏れが発生しなくなり、バグが起きる確率を下げることができる。
 *
 *
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
      <h1>useReducerのレッスン</h1>

      <p>count: {count}</p>

      <button onClick={() => changeCount("increment")}>+1</button>
      <button onClick={() => changeCount("decrement")}>-1</button>
    </>
  );
};

export default App;
