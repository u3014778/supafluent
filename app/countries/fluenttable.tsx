"use client"
import * as React from "react";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  useTableFeatures,
  TableColumnDefinition,
  TableColumnId,
  useTableSort,
  TableCellLayout,
  createTableColumn,
} from "@fluentui/react-components";

type IDCell = {
  label: string;
};

type NameCell = {
  label: string;
};

type Item = {
  id: IDCell;
  countryname: NameCell;
};

let items: Item[] = [];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "id",
    compare: (a, b) => {
      return a.id.label.localeCompare(b.id.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "countryname",
    compare: (a, b) => {
      return a.countryname.label.localeCompare(b.countryname.label);
    },
  }),
];

export const Sort = () => {
  const {
    getRows,
    sort: { getSortDirection, toggleColumnSort, sort },
  } = useTableFeatures(
    {
      columns,
      items,
    },
    [
      useTableSort({
        defaultSortState: { sortColumn: "id", sortDirection: "ascending" },
      }),
    ]
  );

  const headerSortProps = (columnId: TableColumnId) => ({
    onClick: (e: React.MouseEvent) => {
      toggleColumnSort(e, columnId);
    },
    sortDirection: getSortDirection(columnId),
  });

  const rows = sort(getRows());

  return (
    <Table sortable aria-label="Table with sort" style={{ minWidth: "500px" }}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell {...headerSortProps("id")}>ID</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("countryname")}>
          Country
          </TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ item }) => (
          <TableRow key={item.id.label}>
            <TableCell>
              <TableCellLayout>
                {item.id.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.countryname.label}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};