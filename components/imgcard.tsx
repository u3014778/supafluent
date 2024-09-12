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
    width: "545px",
    maxWidth: "100%",
    height: "200px",
  },
});

export const ImgCard = (props: {
  text: string| null | undefined; src: string;
}) => {
  const styles = useStyles();
  return (
    <Card className={styles.card}>
      <CardHeader
        header={<Text size={600}>{props.text}</Text>}
      />
      <CardPreview>
        <img
          src={props.src}
          alt=""
        />
      </CardPreview>
    </Card>
  );
};