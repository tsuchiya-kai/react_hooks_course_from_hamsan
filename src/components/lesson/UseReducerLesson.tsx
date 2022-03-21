// import { useState, useEffect, useReducer } from "react";
// import "bootstrap"; // jquery依存の部分も入るのでエラーになる、後デカすぎる
import "bootstrap/dist/css/bootstrap.min.css";

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
  return (
    <div className="container-fluid">
      <br />
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" />
        </div>

        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>
      <br />
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
