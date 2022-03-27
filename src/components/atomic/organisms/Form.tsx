type Props = {
  title: string;
  setTitle: (arg: string) => void;
  body: string;
  setBody: (arg: string) => void;
  addEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dispatch: (arg: any) => void; //いったん緩めで
};
const Form = (props: Props) => {
  const { title, setTitle, body, setBody, addEvent, dispatch } = props;

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
      >
        イベントを作成する
      </button>
      <button
        className="btn btn-danger"
        onClick={(e) => {
          e.preventDefault();
          window.alert("ほんとに消してええんか？");
          dispatch({ type: "DELETE_ALL_EVENT" });
        }}
      >
        全てのイベントを削除する
      </button>
    </form>
  );
};

export default Form;
