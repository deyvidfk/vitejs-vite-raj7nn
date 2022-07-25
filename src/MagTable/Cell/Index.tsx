import { ReactNode, useContext } from 'react';
import { MagTableColumnDefContext } from '../../MagTable/CollumnDef/Provider';

type TMagTableCellProps = {
  children: (value: any) => ReactNode;
};

const MagTableCell: React.FC<TMagTableCellProps> = ({ children }) => {
  const columnDefConsumer = useContext(MagTableColumnDefContext);
  if (children) {
    return <>{children(columnDefConsumer.value)}</>;
  }
  return null;
};

export { MagTableCell };
