import { useContext } from "react";
import AppContext from "../../../contexts/AppContext";
import { EventTBody } from "./index";

const EventList = () => {
  const AppContextValue = useContext(AppContext);

  return (
    <>
      <pre>{JSON.stringify(AppContextValue)}</pre>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
      </table>
      <EventTBody />
    </>
  );
};

export default EventList;
