import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import { timeCurrentISO8601 } from "../../../utils";

const Form = () => {
  const { title, setTitle, body, setBody, addEvent, dispatch } =
    useContext(AppContext);

  return (
    <form>
      {setTitle && (
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      )}

      {setBody && (
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
      )}

      <button
        className="btn btn-primary"
        onClick={addEvent}
        disabled={!title || !body}
      >
        イベントを作成する
      </button>
      {dispatch && (
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.preventDefault();
            window.confirm("ほんとに消してええんか？");
            dispatch({ type: "DELETE_ALL_EVENT" });
            dispatch({
              type: "ADD_OPERATION_LOG",
              description: "全てのイベントを削除しました",
              operatedAt: timeCurrentISO8601(),
            });
          }}
        >
          全てのイベントを削除する
        </button>
      )}
    </form>
  );
};

export default Form;
