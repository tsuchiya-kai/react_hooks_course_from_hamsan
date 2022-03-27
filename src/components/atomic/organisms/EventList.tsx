import type { State } from "../../../reducers";
import AppContext from "../../../contexts/AppContex";

type Props = {
  state: State;
  dispatch: (arg: any) => void; //いったん緩めで
};

const EventList = (props: Props) => {
  const { state, dispatch } = props;

  return (
    <>
      <AppContext.Consumer>
        {(value) => {
          return <div>{value}</div>;
        }}
      </AppContext.Consumer>
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
    </>
  );
};

export default EventList;
