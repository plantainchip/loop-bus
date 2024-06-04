import { Accordion, AccordionPanel, List, Text, Box } from "grommet";
import { useState } from 'react';

export default function Schedule({ title, stops }) {

  const stopList = stops.map(stop => {
    return <div key={stop.name}>
      <br />
      <Accordion>
        <AccordionPanel label= {
          <h3>{stop.name}</h3>
        }>
          <Box pad="medium" background="#ffdf83">
            <Text><List border={false} data={stop.times} /> </Text>
          </Box>
        </AccordionPanel>
      </Accordion>

    </div>
  });

  console.log(stopList);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {stopList}
      </div>
    </div>
  );
}
