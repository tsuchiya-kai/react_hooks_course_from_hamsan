import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";

const EventTBody = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <tbody>
      {state.map((event) => {
        return (
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
                    dispatch({ type: "DELETE_EVENT", id: event.id });
                  }}
                >
                  削除
                </button>
              )}
            </th>
          </tr>
        );
      })}
    </tbody>
  );
};

export default EventTBody;
