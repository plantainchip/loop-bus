import React, { useState,useContext } from "react";

import {
  Box,
  Button,
  Grid,
  Grommet,
  grommet,
  Page,
  PageContent,
  PageHeader,
  Text,
} from "grommet";
import { deepMerge } from "grommet/utils";
import { Moon, Sun } from "grommet-icons";

import AppBar from "./components/AppBar";
import CardTemplate from "./components/CardTemplate";


const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#ffcb04',
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
});

function App() {
  const [dark, setDark] = useState(true);
  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="large">My App</Text>
          <Button
            a11yTitle={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            icon={dark ? <Moon /> : <Sun />}
            onClick={() => setDark(!dark)}
            tip={{
              content: (
                <Box
                  pad="small"
                  round="small"
                  background={dark ? "dark-1" : "light-3"}
                >
                  {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Box>
              ),
              plain: true,
            }}
          />
        </AppBar>
        <PageContent>
          <PageHeader title="Welcome to Grommet!" />
          <Grid columns="medium" gap="large" pad={{ bottom: "large" }}></Grid>
          <CardTemplate title={"Card 1"} />
          <CardTemplate title={"Card 2"} />
          <CardTemplate title={"Card 3"} />
        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
