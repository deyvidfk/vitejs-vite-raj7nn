import React, { useContext } from 'react';
import { MagTableCell } from '../../MagTable/Cell/Index';
import {
  MagTableColumnDefContext,
  MagTableColumnDefProvider,
} from '../../MagTable/CollumnDef/Provider';

type TMagTableColumnDefProps = {
  name?: string;
};

const MagTableColumnDef: React.FC<
  React.PropsWithChildren<TMagTableColumnDefProps>
> = ({ children }) => {
  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child) && child.type === MagTableCell) {
          {
            return React.cloneElement(child);
          }
        }
      })}
    </>
  );
};

export { MagTableColumnDef };
