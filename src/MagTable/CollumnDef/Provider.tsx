import React from 'react';

export type TMagTableColumnDefContext = {
  value: unknown;
};
export const MagTableColumnDefContext =
  React.createContext<TMagTableColumnDefContext>({ value: null });
export const MagTableColumnDefProvider = MagTableColumnDefContext.Provider;
