import * as React from "react";
import {
  makeStyles,
} from "@fluentui/react-components";
import {
  Card,
  Text,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { PlayerStatsTable } from "./PlayerStatsTable";
import { TeamStatsTable } from "./TeamStatsTable";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "360px",
    maxWidth: "100%",
    height: "220px",
  },
});

export const StatsTableCard = (props: {
  text: string| null | undefined
}) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        header={<Text size={500}>{props.text}</Text>}
      />
      <CardPreview>
        <TeamStatsTable/>
      </CardPreview>
    </Card>
  );
};