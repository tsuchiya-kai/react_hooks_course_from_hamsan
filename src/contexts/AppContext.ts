import { createContext } from "react";
import type { State as Events } from "../reducers/events";

type AppContextType = {
  state: { events: Events };
  title: string;
  setTitle?: (arg: string) => void;
  body: string;
  setBody?: (arg: string) => void;
  addEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dispatch?: (arg: any) => void; //いったん緩めで
};

const AppContext = createContext<AppContextType>({
  state: { events: [] },
  title: "",
  body: "",
});

// TODO: contextをexportする

export default AppContext;
