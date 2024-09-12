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
} from "@fluentui/react-components";
import {
  Globe20Regular,
  Person20Regular,
  SportSoccer24Regular
} from "@fluentui/react-icons";
import Image from "next/image";
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
            icon={<Image src="/images/fc.svg"
              width={20}
              height={20}
              alt="Picture of the author"/>}
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

        
      </div>
    </div>
  );
};