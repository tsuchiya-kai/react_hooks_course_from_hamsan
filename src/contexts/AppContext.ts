import { createContext, useContext } from "react";
import type { State as Events } from "../reducers/events";
import type { State as OperationLogs } from "../reducers/operationLogs";
import reducer from "../reducers";
console.log(reducer);

type ReducerParameterAction = Parameters<typeof reducer>[1];

type AppContextType = {
  state: { events: Events; operationLogs: OperationLogs };
  title: string;
  setTitle: (arg: string) => void;
  body: string;
  setBody: (arg: string) => void;
  addEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dispatch: React.Dispatch<ReducerParameterAction>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) throw new Error("コンテキストがない！");
  return context;
};

const AppContext = createContext<AppContextType | null>(null);

export default AppContext;
