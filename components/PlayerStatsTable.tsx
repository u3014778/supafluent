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

type AssistsCell = {
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
  assists: AssistsCell;
  tackles: TacklesCell;
  passes: PassesCell;
  goals: GoalsCell;
  minutes: MinutesCell;
};

const items: Item[] = [
  {
    assists: { label: "10"},
    tackles: { label: "125"},
    passes: { label: "204"},
    goals: { label: "30"},
    minutes: {label: "3176"},
  },
  {
    assists: { label: "11"},
    tackles: { label: "152"},
    passes: { label: "198"},
    goals: { label: "36"},
    minutes: {label: "3234"},
  },
  {
    assists: { label: "13"},
    tackles: { label: "128"},
    passes: { label: "193"},
    goals: { label: "22"},
    minutes: {label: "3240"},
  },
  
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "assists",
    compare: (a, b) => {
      return parseInt(a.assists.label)>parseInt(b.assists.label)?1:-1;
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

export const PlayerStatsTable = () => {
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
        defaultSortState: { sortColumn: "assists", sortDirection: "ascending" },
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
          <TableHeaderCell {...headerSortProps("assists")}>Assists</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("tackles")}>Tackles</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("passes")}>Passes</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("goals")}>Goals</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("minutes")}>Minutes played</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ item }) => (
          <TableRow key={item.assists.label}>
            <TableCell>
              <TableCellLayout>
                {item.assists.label}
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