import { createContext } from "react";
import type { State as Events } from "../reducers/events";
import reducer from "../reducers";
console.log(reducer);

type ReducerParameterAction = Parameters<typeof reducer>[1];

type AppContextType = {
  state: { events: Events };
  title: string;
  setTitle?: (arg: string) => void;
  body: string;
  setBody?: (arg: string) => void;
  addEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dispatch?: React.Dispatch<ReducerParameterAction>;
};

const AppContext = createContext<AppContextType>({
  state: { events: [] },
  title: "",
  body: "",
});

// TODO: contextをexportする

export default AppContext;
