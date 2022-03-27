import { createContext } from "react";

type AppContextType = string;

const AppContext = createContext<AppContextType>("");

export default AppContext;
