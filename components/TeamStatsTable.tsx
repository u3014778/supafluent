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

type WinsCell = {
  label: string;
};

type DrawsCell = {
  label: string;
};

type LossesCell = {
  label: string;
};

type PossessionCell = {
  label: string;
};

type TeampassesCell = {
    label: string;
  };
  
type Item = {
  wins: WinsCell;
  draws: DrawsCell;
  losses: LossesCell;
  possession: PossessionCell;
  teampasses: TeampassesCell;
};

const items: Item[] = [
  {
    wins: { label: "18"},
    draws: { label: "15"},
    losses: { label: "4"},
    possession: { label: "55%"},
    teampasses: {label: "26176"},
  },
  {
    wins: { label: "20"},
    draws: { label: "13"},
    losses: { label: "8"},
    possession: { label: "56%"},
    teampasses: {label: "25204"},
  },
  {
    wins: { label: "16"},
    draws: { label: "12"},
    losses: { label: "5"},
    possession: { label: "60%"},
    teampasses: {label: "23240"},
  },
  
];

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: "wins",
    compare: (a, b) => {
      return parseInt(a.wins.label)>parseInt(b.wins.label)?1:-1;
    },
  }),
  createTableColumn<Item>({
    columnId: "draws",
    compare: (a, b) => {
      return a.draws.label.localeCompare(b.draws.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "losses",
    compare: (a, b) => {
      return a.losses.label.localeCompare(b.losses.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "possession",
    compare: (a, b) => {
      return a.possession.label.localeCompare(b.possession.label);
    },
  }),
  createTableColumn<Item>({
    columnId: "teampasses",
    compare: (a, b) => {
      return a.teampasses.label.localeCompare(b.teampasses.label);
    },
  }),
];

export const TeamStatsTable = () => {
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
        defaultSortState: { sortColumn: "wins", sortDirection: "ascending" },
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
          <TableHeaderCell {...headerSortProps("wins")}>Wins</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("draws")}>Draws</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("losses")}>Losses</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("possession")}>Possession</TableHeaderCell>
          <TableHeaderCell {...headerSortProps("teampasses")}>Team passes</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ item }) => (
          <TableRow key={item.wins.label}>
            <TableCell>
              <TableCellLayout>
                {item.wins.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.draws.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>{item.losses.label}</TableCell>
            <TableCell>
              <TableCellLayout>
                {item.possession.label}
              </TableCellLayout>
            </TableCell>
            <TableCell>
              <TableCellLayout>
                {item.teampasses.label}
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};