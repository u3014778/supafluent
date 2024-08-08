import * as React from "react";
import {
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  AppItem,
} from "@fluentui/react-nav-preview";
import {
  makeStyles,
  tokens,
  useId,
} from "@fluentui/react-components";
import {
  PeopleTeam20Regular,
  Globe20Regular,
  Person20Regular,
  SportSoccer24Regular
} from "@fluentui/react-icons";
import { Sort as DefaultTable} from "./fluenttable"; 
const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

export const NavDrawerSize = (props: Partial<NavDrawerProps>) => {
  const styles = useStyles();

  const appItemIconLabelId = useId("app-item-icon-label");

  const [isAppItemIconPresent, setIsAppItemIconPresent] = React.useState(true);

  return (
    <div className={styles.root}>
      <NavDrawer
        open={true}
        type={"inline"}
        size={"medium"}
      >
        <NavDrawerHeader>

        </NavDrawerHeader>
        <NavDrawerBody>
          <AppItem icon={<SportSoccer24Regular/>} as="a">
            Football games
          </AppItem>
          <NavItem href="/countries" icon={<Globe20Regular />} value="1">
            Countries
          </NavItem>
          <NavItem
            href="/clubs"
            icon={<PeopleTeam20Regular />}
            value="2"
          >
            Clubs
          </NavItem>
          <NavItem
            href="/players"
            icon={<Person20Regular />}
            value="3"
          >
            Players
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>

        <DefaultTable/>
      </div>
    </div>
  );
};