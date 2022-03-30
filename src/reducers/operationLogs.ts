type operation = {
  description: string;
  operatedAt: string;
};
export type State = operation[];
type AddCase = operation & { type: "ADD_OPERATION_LOG" };
type AllDeleteCase = { type: "DELETE_ALL_OPERATION_LOGS" };
type Action = AddCase | AllDeleteCase;

const operationLogs = (state: State = [], action: Action) => {
  switch (action.type) {
    case "ADD_OPERATION_LOG":
      const { type, ...operationLog } = action;
      return [operationLog, ...state];

    case "DELETE_ALL_OPERATION_LOGS":
      return [];

    default:
      return state;
  }
};

export default operationLogs;
