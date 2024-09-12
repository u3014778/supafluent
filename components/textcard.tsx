import * as React from "react";
import {
  makeStyles,
  Text,
  tokens,
} from "@fluentui/react-components";
import { Card} from "@fluentui/react-components";

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
  },

  card: {
    width: "360px",
    maxWidth: "100%",
    height: "fit-content",
  },

  section: {
    width: "fit-content",
  },

  title: { margin: "0 0 12px" },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },
});

export const TextCard = (props: {
  message: string| null | undefined; total: string | number | null | undefined;
}) => {
  const styles = useStyles();

  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <Card className={styles.card}>
          <Text size={800} align="center">{props.total}<br/>{props.message}</Text>
        </Card>
      </section>
    </div>
  );
};