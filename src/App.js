import React, { useState} from "react";

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'




import {
  Grommet,
  grommet,
  Page,
  PageContent,
  Text,
} from "grommet";
import { deepMerge } from "grommet/utils";

import AppBar from "./components/AppBar";
import Stop from "./components/Stop";

import stops from "./stops.json"

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
  const [dark] = useState(false);

  const stopList = stops.map(stop => 
    <Stop 
      key={stop.name} 
      name={stop.name}  
      location={stop.location}  
      times={stop.times}  
    />
  )

  return (
    <Grommet theme={theme} full themeMode={dark ? "dark" : "light"}>
      <Page>
        <AppBar>
          <Text size="large">Glen Cove Loop Bus</Text>
          {/* <Button
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
          /> */}
        </AppBar>
        <PageContent>
          <br />

          <MapContainer center={[40.8673, -73.6337]} zoom={13.5} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
              {stopList}

          </MapContainer>


        </PageContent>
      </Page>
    </Grommet>
  );
}

export default App;
