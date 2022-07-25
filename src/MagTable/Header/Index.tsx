import { ReactNode, useContext } from 'react';
import { MagTableColumnDefContext } from '../../MagTable/CollumnDef/Provider';

type TMagTableCellHeaderProps = {
  sort?: boolean;
  component?: React.ReactNode;
};

const MagTableCellHeader: React.FC<
  React.PropsWithChildren<TMagTableCellHeaderProps>
> = ({ children, sort }) => {
  if (sort) {
    return <>{children}</>;
  }
  return <>{children}</>;
};

export { MagTableCellHeader };
