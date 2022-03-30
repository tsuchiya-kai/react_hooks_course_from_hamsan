import { useAppContext } from "../../../contexts/AppContext";
import { EventTBody } from "./index";

const EventList = () => {
  const AppContextValue = useAppContext();

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
        <EventTBody />
      </table>
    </>
  );
};

export default EventList;
