import { useAppContext } from "../../../contexts/AppContext";
import { timeCurrentISO8601 } from "../../../utils";
import "bootstrap/dist/css/bootstrap.min.css";

const EventTBody = () => {
  const {
    state: { events },
    dispatch,
  } = useAppContext();
  return (
    <tbody>
      {events.map((event) => (
        <tr key={event.id}>
          <th>{event.id}</th>
          <th>{event.title}</th>
          <th>{event.body}</th>
          <th>
            {dispatch && (
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.preventDefault();
                  const result = window.confirm(
                    `ほな、ID:${event.id}のイベント消すで？ええんか？`
                  );
                  if (!result) return;
                  dispatch({ type: "DELETE_EVENT", id: event.id });
                  dispatch({
                    type: "ADD_OPERATION_LOG",
                    description: `ID:${event.id}のイベントを削除しました`,
                    operatedAt: timeCurrentISO8601(),
                  });
                }}
              >
                削除
              </button>
            )}
          </th>
        </tr>
      ))}
    </tbody>
  );
};

export default EventTBody;
