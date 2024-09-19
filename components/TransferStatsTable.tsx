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

type TacklesCell = {
  label: string;
};

type PassesCell = {
  label: string;
};

type GoalsCell = {
  label: string;
};

type MinutesCell = {
    label: string;
  };
  
type Item = {
  s1920: S1920Cell;
  tackles: TacklesCell;
  passes: PassesCell;
  goals: GoalsCell;
  minutes: MinutesCell;
};

const items: Item[] = [
  {
    s1920: { label: "81.85m"},
    tackles: { label: "125"},
    passes: { label: "204"},
    goals: { label: "30"},
    minutes: {label: "3176"},
  },
  {
    s1920: { label: "31.97m"},
    tackles: { label: "152"},
    passes: { label: "198"},
    goals: { label: "36"},
    minutes: {label: "3234"},
  },
  {
    s1920: { label: "56.93m"},
    tackles: { label: "128"},
    passes: { label: "193"},
    goals: { label: "22"},
    minutes: {label: "3240"},
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
    columnId: "tackles",
    compare: (a, b) => {
      return a.tackles.label.localeCompare(b.tackles.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "passes",
    compare: (a, b) => {
      return a.passes.label.localeCompare(b.passes.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "goals",
    compare: (a, b) => {
      return a.goals.label.localeCompare(b.goals.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "minutes",
    compare: (a, b) => {
      return a.minutes.label.localeCompare(b.minutes.label);
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
          <TableHeaderCell {...headerSortProps("tackles")}>Tackles</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("passes")}>Passes</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("goals")}>Goals</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("minutes")}>Minutes played</TableHeaderCell>
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
                {item.tackles.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>{item.passes.label}</TableCell>
            <TableCell>
              <TableCellLayout>
                {item.goals.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.minutes.label}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};