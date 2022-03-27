import { useReducer, useState } from "react";
import reducer from "../../reducers";
import "bootstrap/dist/css/bootstrap.min.css";
// component
import { TopForm, EventList } from "../atomic/organisms";
// 以下 Context周り
import AppContex from "../../contexts/AppContext";

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
    <AppContex.Provider value={"テスト"}>
      <div className="container-fluid">
        <br />

        <h4>イベント作成フォーム</h4>
        <TopForm {...{ title, setTitle, body, setBody, addEvent, dispatch }} />

        <br />

        <h4>イベント一覧</h4>
        <EventList {...{ state, dispatch }} />
      </div>
    </AppContex.Provider>
  );
};

export default App;
