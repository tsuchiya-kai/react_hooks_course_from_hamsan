import { OperationLogTbody } from "./index";

const EventList = () => (
  <>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>内容</th>
          <th>日時</th>
          <th></th>
        </tr>
      </thead>
      <OperationLogTbody />
    </table>
  </>
);

export default EventList;
