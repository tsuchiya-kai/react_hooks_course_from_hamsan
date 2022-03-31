import { useAppContext } from "../../../contexts/AppContext";
import "bootstrap/dist/css/bootstrap.min.css";

const EventTBody = () => {
  const {
    state: { operationLogs },
  } = useAppContext();
  return (
    <tbody>
      {operationLogs.map((log, index) => (
        <tr key={`${log.operatedAt}-${index}`}>
          <th>{log.description}</th>
          <th>{log.operatedAt}</th>
        </tr>
      ))}
    </tbody>
  );
};

export default EventTBody;
