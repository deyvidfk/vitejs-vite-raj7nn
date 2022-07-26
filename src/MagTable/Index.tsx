import React from 'react';
import { MagTableColumnDef } from '../MagTable/CollumnDef/Index';
import { MagTableColumnDefProvider } from '../MagTable/CollumnDef/Provider';
import { MagTableCellHeader } from '../MagTable/Header/Index';
import { MagTableProvider } from '../MagTable/Provider';

type TMagTableProps = {
  datasource: Array<unknown>;
  onSort?: (
    column: string | undefined,
    index: number,
    direction: 'ASC' | 'DESC'
  ) => void;
};

const MagTable: React.FC<React.PropsWithChildren<TMagTableProps>> = ({
  datasource,
  children,
}) => {
  return (
    <MagTableProvider value={{ datasource }}>
      <table>
        <thead>
          <tr>
            {React.Children.map(children, (child, index) => {
              if (
                React.isValidElement(child) &&
                child.type === MagTableColumnDef
              ) {
                return (
                  <th>
                    {React.Children.map(child.props.children, (sc) => {
                      if (
                        React.isValidElement(sc) &&
                        sc.type === MagTableCellHeader
                      ) {
                        return React.cloneElement(sc);
                      }
                    })}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {datasource.map((item) => {
            return (
              <tr>
                {React.Children.map(children, (child, index) => {
                  if (
                    React.isValidElement(child) &&
                    child.type === MagTableColumnDef
                  ) {
                    return (
                      <MagTableColumnDefProvider value={{ value: item }}>
                        {React.cloneElement(child)}
                      </MagTableColumnDefProvider>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </MagTableProvider>
  );
};

export default MagTable;
