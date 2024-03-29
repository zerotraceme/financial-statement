import React, { createContext } from "react";
import FinancialsReducer from "../reducers/FinancialsReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import InitialFinancials from "../InitialFinancials";
import { IFinancials} from "../Financials";
import { Actions } from "../reducers/FinancialsReducer";

export const FinancialsContext = createContext<Partial<IFinancials>>({});
export const DispatchContext = createContext<Partial<React.Dispatch<Actions>>>({});

export const FinancialsProvider: React.FC = (props) => {
  const [financials, dispatch] = useLocalStorageReducer(
    "financials",
    JSON.stringify(InitialFinancials),
    FinancialsReducer
  );

  return (
    <FinancialsContext.Provider value={financials}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </FinancialsContext.Provider>
  );
}
