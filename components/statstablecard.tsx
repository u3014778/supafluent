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
import { TransferStatsTable } from "./TransferStatsTable";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "360px",
    maxWidth: "100%",
    height: "220px",
  },
});

function renderSwitch(param: any) {
  switch(param) {
    case 'Players stats':
      return <PlayerStatsTable/>;
    case 'Teams stats':
      return <TeamStatsTable/>;
    case 'Transfer stats':
      return <TransferStatsTable/>;
    default:
      return undefined;
  }
}
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
        {renderSwitch(props.text)}
      </CardPreview>
    </Card>
  );
};