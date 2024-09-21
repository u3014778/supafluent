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

type S1920Cell = {
  label: string;
};

type S2021Cell = {
  label: string;
};

type S2122Cell = {
  label: string;
};

type S2223Cell = {
  label: string;
};

type S2324Cell = {
    label: string;
  };
  
type Item = {
  s1920: S1920Cell;
  s2021: S2021Cell;
  s2122: S2122Cell;
  s2223: S2223Cell;
  s2324: S2324Cell;
};

const items: Item[] = [
  {
    s1920: { label: "81.85m"},
    s2021: { label: "51.6m"},
    s2122: { label: "118.93m"},
    s2223: { label: "127.5m"},
    s2324: { label: "79.65m"},
  },
  {
    s1920: { label: "31.97m"},
    s2021: { label: "83.95m"},
    s2122: { label: "109.9m"},
    s2223: { label: "144.24m"},
    s2324: { label: "91.45m"},
  },
  {
    s1920: { label: "56.93m"},
    s2021: { label: "51.75m"},
    s2122: { label: "54.82m"},
    s2223: { label: "93.73m"},
    s2324: { label: "59.17m"},
  },
  
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "s1920",
    compare: (a, b) => {
      return parseInt(a.s1920.label)>parseInt(b.s1920.label)?1:-1;
    },
  }),
  createTableColumn<Item>({
    columnId: "s2021",
    compare: (a, b) => {
      return a.s2021.label.localeCompare(b.s2021.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "s2122",
    compare: (a, b) => {
      return a.s2122.label.localeCompare(b.s2122.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "s2223",
    compare: (a, b) => {
      return a.s2223.label.localeCompare(b.s2223.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "s2324",
    compare: (a, b) => {
      return a.s2324.label.localeCompare(b.s2324.label);
    },
  }),
];

export const TransferStatsTable = () => {
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
        defaultSortState: { sortColumn: "s1920", sortDirection: "ascending" },
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
          <TableHeaderCell {...headerSortProps("s1920")}>19/20</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("s2021")}>20/21</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("s2122")}>21/22</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("s2223")}>22/23</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("s2324")}>23/24</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ item }) => (
          <TableRow key={item.s1920.label}>
            <TableCell>
              <TableCellLayout>
                {item.s1920.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.s2021.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>{item.s2122.label}</TableCell>
            <TableCell>
              <TableCellLayout>
                {item.s2223.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.s2324.label}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};