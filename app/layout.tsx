"use client"
import { GeistSans } from "geist/font/sans";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import * as React from "react";
import {
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  AppItem,
} from "@fluentui/react-nav-preview";
import {
  makeStyles,
  tokens,
} from "@fluentui/react-components";
import {
  ClipboardTask20Regular,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = useStyles();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
          <FluentProvider theme={webLightTheme}>
            <div className={styles.root}><NavDrawer
                open={true}
                type={"inline"}
                size={"medium"}
              >
                <NavDrawerHeader>
                <AppItem icon={<SportSoccer24Regular />} as="a">
                    Football games
                  </AppItem>
                </NavDrawerHeader>
                <NavDrawerBody>
                  
                  <NavItem href="/" icon={<ClipboardTask20Regular />} value="1">
                    Dashboard
                  </NavItem>
                  <NavItem href="/countries" icon={<Globe20Regular />} value="2">
                    Countries
                  </NavItem>
                  <NavItem
                    href="/clubs"
                    icon={<Image src="/images/fc.svg"
                      width={20}
                      height={20}
                      alt="Picture of the author" />}
                    value="3"
                  >
                    Clubs
                  </NavItem>
                  <NavItem
                    href="/players"
                    icon={<Person20Regular />}
                    value="4"
                  >
                    Players
                  </NavItem>
                </NavDrawerBody>
              </NavDrawer>
              <div className={styles.content}>{children}</div>
            </div>
          </FluentProvider>
      </body>
    </html>
  );
}
