import React, { useContext } from "react";

import { ConfigProviderInterface } from "./Types";
import { DataProviderInterface } from "superset-dashboard-sdk";

export type SupersetContextInterface = {
  dataProvider?: DataProviderInterface;
  configProvider?: ConfigProviderInterface;
};

export type SupersetContextProviderProps = {
  dataProvider: DataProviderInterface;
  configProvider: ConfigProviderInterface;
  children: React.ReactNode;
};

const SupersetContext = React.createContext<SupersetContextInterface | null>(
  null
);
export const SupersetContextProvider = ({
  dataProvider,
  configProvider,
  children,
}: SupersetContextProviderProps) => {
  return (
    <SupersetContext.Provider value={{ dataProvider, configProvider }}>
      {children}
    </SupersetContext.Provider>
  );
};
export const useSupersetContext = () => useContext(SupersetContext);
