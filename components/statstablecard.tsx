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


const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "360px",
    maxWidth: "100%",
    height: "220px",
  },
});

export const StatsTableCard = (props: {
  text: string| null | undefined; src: string;
}) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        header={<Text size={500}>{props.text}</Text>}
      />
      <CardPreview>
        {<img
          src={props.src}
          alt=""
        />}
      </CardPreview>
    </Card>
  );
};