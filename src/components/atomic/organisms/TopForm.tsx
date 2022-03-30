import { useAppContext } from "../../../contexts/AppContext";
import { timeCurrentISO8601 } from "../../../utils";

const Form = () => {
  const {
    title,
    setTitle,
    body,
    setBody,
    addEvent,
    dispatch,
    state: { events, operationLogs },
  } = useAppContext();

  return (
    <form>
      <div className="form-group">
        <label htmlFor="formEventTitle">タイトル</label>
        <input
          className="form-control"
          id="formEventTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="formEventBody">ボディー</label>
        <textarea
          className="form-control"
          id="formEventBody"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        onClick={addEvent}
        disabled={!title || !body}
        style={{ marginRight: "8px" }}
      >
        イベントを作成する
      </button>

      <button
        className="btn btn-danger"
        onClick={(e) => {
          e.preventDefault();
          window.confirm("ほんまに消してええんか？");
          dispatch({ type: "DELETE_ALL_EVENT" });
          dispatch({
            type: "ADD_OPERATION_LOG",
            description: "全てのイベントを削除しました",
            operatedAt: timeCurrentISO8601(),
          });
        }}
        disabled={!events.length}
        style={{ marginRight: "8px" }}
      >
        全てのイベントを削除する
      </button>

      <button
        className="btn btn-danger"
        onClick={(e) => {
          e.preventDefault();
          window.confirm("ほんまに全部消してまうでぇ？");
          dispatch({ type: "DELETE_ALL_OPERATION_LOGS" });
        }}
        disabled={!operationLogs.length}
      >
        全ての操作ログを削除する
      </button>
    </form>
  );
};

export default Form;
