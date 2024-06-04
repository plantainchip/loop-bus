import { DropButton, List, Box } from "grommet";
import { useState } from 'react';

export default function Schedule({ title, stops }) {

  const stopList = stops.map(stop => {
    return <div key={stop.name}>
      <br />
      <DropButton
        size="large"
        style={{width: "100%"}}
        label={stop.name}
        dropAlign={{ top: 'bottom', right: 'right' }}
        dropContent={
          <List border={false} data={stop.times} /> 
        }
      />   
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
