import { createContext } from "react";
import type { State } from "../reducers";

type AppContextType = {
  state: State;
  title: string;
  setTitle?: (arg: string) => void;
  body: string;
  setBody?: (arg: string) => void;
  addEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dispatch?: (arg: any) => void; //いったん緩めで
};

const AppContext = createContext<AppContextType>({
  state: [],
  title: "",
  body: "",
});

export default AppContext;
