import { Accordion, AccordionPanel, List, Text, Box } from "grommet";

export default function Schedule({ title, stops }) {
  console.log(stops);
  let nextStop = null;
  let temp = null;
  let earliestStop = null;
  let temp2 = null;
  for (let i = 0; i < stops.length; i++) {
    const stop = stops[i];
    const timeObjs = stop.times.map(time => {
      const [timeStr, period] = time.split(" ");
      const [hour, min] = timeStr.split(":");
      return { hour, min, period, name: stop.name };
    });
    const now = new Date();
    // now.setHours(11); // for testing purposes 
    for (let j = 0; j < timeObjs.length; j++) {
      const timeObj = timeObjs[j];
      let { hour, min, period, name } = timeObj;
      hour = parseInt(hour);
      min = parseInt(min);
      if (period === "PM") {
        hour += 12;
      }
      const stopTime = new Date();
      stopTime.setHours(hour);
      stopTime.setMinutes(min);
      
      if (stopTime > now) {
        if (temp === null) {
          temp = stopTime;
          nextStop = hour + ":" + min + " " + period + " at " + name;
        } else if (stopTime < temp) {
          temp = stopTime;
          nextStop = hour + ":" + min + " " + period + " at " + name;
        }
      }

      // maitri code
      if (earliestStop === null) {
        earliestStop = stopTime;
        temp2 = name;
      } else if (stopTime < earliestStop) {
        earliestStop = stopTime;
        temp2 = name;
      }
      // maitri code

    }
  }
  if (nextStop === null) {
    nextStop = "No more stops today";
  }
  console.log("next stop 🚏", nextStop,"Earliest Stop:", earliestStop.getHours(), earliestStop.getMinutes());
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

  // console.log(stopList);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h1>Next Stop 🚐💨</h1>
        <h2 id="nextStopInfo">{nextStop}</h2>
        {stopList}
      </div>
    </div>
  );
}
