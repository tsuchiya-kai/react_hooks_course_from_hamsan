import { useReducer, useState } from "react";
import reducer from "../../reducers";
import "bootstrap/dist/css/bootstrap.min.css";
// component
import { TopForm } from "../atomic/organisms";
// 以下 Context周り
import AppContex from "../../contexts/AppContex";

console.log({ AppContex });

/**
 * メモ:
 */
const App = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [state, dispatch] = useReducer(reducer, []);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="container-fluid">
      <br />

      <h4>イベント作成フォーム</h4>
      <TopForm {...{ title, setTitle, body, setBody, addEvent, dispatch }} />

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
        <tbody>
          {state.map((event) => {
            return (
              <tr key={event.id}>
                <th>{event.id}</th>
                <th>{event.title}</th>
                <th>{event.body}</th>
                <th>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "DELETE_EVENT", id: event.id });
                    }}
                  >
                    削除
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
