import { useReducer, useState } from "react";
import reducer from "../../reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeCurrentISO8601 } from "../../utils";
// component
import { TopForm, EventList } from "../atomic/organisms";
// 以下 Context周り
import AppContext from "../../contexts/AppContext";

/**
 * メモ:
 */
const App = () => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const initialState = { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: "CREATE_EVENT", title, body });
    dispatch({
      type: "ADD_OPERATION_LOG",
      description: "イベントを作成しました。",
      operatedAt: timeCurrentISO8601(),
    });
    setTitle("");
    setBody("");
  };

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
        body,
        setBody,
        addEvent,
        state,
        dispatch,
      }}
    >
      <div className="container-fluid">
        <br />

        <h4>イベント作成フォーム</h4>
        <TopForm />

        <br />

        <h4>イベント一覧</h4>
        <EventList />
      </div>
    </AppContext.Provider>
  );
};

export default App;
