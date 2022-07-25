import React from 'react';

export type TMagTableContext = {
  datasource: Array<unknown>;
};
export const MagTableContext = React.createContext<TMagTableContext>({
  datasource: [],
});
export const MagTableProvider = MagTableContext.Provider;
