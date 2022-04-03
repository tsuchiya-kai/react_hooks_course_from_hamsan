import { useReducer, useState } from "react";
import reducer from "../../reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import { timeCurrentISO8601 } from "../../utils";
// component
import { TopForm, EventList, OperationLogs } from "../atomic/organisms";
// 以下 Context周り
import AppContext from "../../contexts/AppContext";
import useLocalStorage from "../../hooks/useLocalStorage";

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

  // 以下テスト
  type TestState = {
    key1: string;
    key2: number;
  };
  const { setState, deleteState } = useLocalStorage<TestState>("testState");

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

        <br />

        <h4>操作ログ一覧</h4>
        <OperationLogs />

        <button onClick={() => setState("key1", "テスト")}>テスト</button>
        <button onClick={() => setState("key2", "テスト")}>テスト2</button>

        <button onClick={() => deleteState("key1")}>テスト</button>
        <button onClick={() => deleteState("key2")}>テスト2</button>
      </div>
    </AppContext.Provider>
  );
};

export default App;
