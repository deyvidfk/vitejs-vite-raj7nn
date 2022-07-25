import React from 'react';
import { MagTableColumnDef } from '../MagTable/CollumnDef/Index';
import { MagTableColumnDefProvider } from '../MagTable/CollumnDef/Provider';
import { MagTableProvider } from '../MagTable/Provider';

type TMagTableProps = {
  datasource: Array<unknown>;
};

const MagTable: React.FC<React.PropsWithChildren<TMagTableProps>> = ({
  datasource,
  children,
}) => {
  return (
    <MagTableProvider value={{ datasource }}>
      <table>
        <tr>
          {React.Children.map(children, (child, index) => {
            if (
              React.isValidElement(child) &&
              child.type === MagTableColumnDef
            ) {
              return <th>{child.props.title}</th>;
            }
          })}
        </tr>

        {datasource.map((item) => {
          return (
            <tr>
              <MagTableColumnDefProvider value={{ value: item }}>
                {React.Children.map(children, (child, index) => {
                  if (
                    React.isValidElement(child) &&
                    child.type === MagTableColumnDef
                  ) {
                    return React.cloneElement(child);
                  }
                })}
              </MagTableColumnDefProvider>
            </tr>
          );
        })}
      </table>
    </MagTableProvider>
  );
};

export default MagTable;
